import { Button, Form, Input } from '1byte-react-design';
import { AUTH_TOKEN_KEY } from '@/models/constants/cookie';
import { PATHS } from '@/router/paths';
import useAuthLoginSchema from '@/services/auth/hooks/useAuthLoginSchema';
import { useAuthLoginMutation } from '@/services/auth/mutations';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookingDoctorJs, IAuthLoginData } from 'booking-doctor-js';
import { useCookies } from 'react-cookie';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { SignInWrapper } from './styles';
const SignIn = () => {
    const { t } = useTranslation(['bkd.user']);
    const [, setCookie] = useCookies();
    const navigation = useNavigate();
    const signInSchema = useAuthLoginSchema();

    const { isPending: isPendingLoginMutation, mutateAsync: loginMutateAsync } =
        useAuthLoginMutation();

    const { control, handleSubmit } = useForm<IAuthLoginData>({
        resolver: yupResolver(signInSchema),
    });

    const handleFormSubmit: SubmitHandler<IAuthLoginData> = async authenticateParams => {
        await loginMutateAsync(authenticateParams, {
            onSuccess: async data => {
                if (!data) return;
                const { access_token } = data;
                setCookie(AUTH_TOKEN_KEY, access_token, {
                    path: '/',
                });
                bookingDoctorJs.changeAuthKey(access_token);

                navigation(PATHS.ADMIN.DASHBOARD.SELF);
            },
        });
    };

    return (
        <SignInWrapper title={t('sign_in')}>
            <Form
                onSubmitCapture={handleSubmit(handleFormSubmit)}
                layout="vertical"
                style={{
                    width: '100%',
                }}
            >
                <Form.ItemControl name="email" control={control} label={t('email')} required>
                    <Input autoFocus />
                </Form.ItemControl>
                <Form.ItemControl
                    name="password"
                    control={control}
                    label={t('password')}
                    block
                    required
                >
                    <Input.Password />
                </Form.ItemControl>
                {/* <Flex justify="space-between">
                    <Form.Item name="isRememberMe" valuePropName="checked" required>
                        <Checkbox>{t('remember_me')}</Checkbox>
                    </Form.Item>
                    <Link to={PATHS.AUTH.FORGOT_PASSWORD}>{t('forgot_password')}?</Link>
                </Flex> */}
                <Form.Item>
                    <Button htmlType="submit" type="primary" loading={isPendingLoginMutation} block>
                        {t('sign_in')}
                    </Button>
                </Form.Item>
            </Form>
            {/* <Flex justify="center">
                <Typography.Text>
                    {t('dont_have_account')}{' '}
                    <Link to={PATHS.AUTH.SIGN_UP}>
                        <Typography.Link>{t('sign_up')}</Typography.Link>
                    </Link>
                </Typography.Text>
            </Flex> */}
        </SignInWrapper>
    );
};

export default SignIn;
