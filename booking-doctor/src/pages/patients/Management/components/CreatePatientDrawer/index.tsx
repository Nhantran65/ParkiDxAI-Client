import { Button, Flex, Form, Input, Space } from '1byte-react-design';
import { getHospitalsQuery } from '@/services/hospital/queries';
import useCreateUserSchema from '@/services/user/hooks/useCreateUserSchema';
import { useCreateUserMutation } from '@/services/user/mutations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';
import { ICreateUserData } from 'booking-doctor-js';
import { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CreatePatientDrawerWrapper } from './styles';
import { ICreatePatientDrawerProps, ICreatePatientDrawerRef } from './types';
import { InputUpload } from '@/components/Input/InputUpload';

const CreatePatientDrawer = forwardRef<ICreatePatientDrawerRef, ICreatePatientDrawerProps>(
    (props, ref) => {
        const {} = props;
        const { t } = useTranslation(['bkd.patient', 'action']);
        const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
        const { data: hospital } = useQuery(getHospitalsQuery());

        const schema = useCreateUserSchema();
        const { mutateAsync: createPatientMutationAsync, isPending: isPendingCreatePatient } =
            useCreateUserMutation();

        const form = useForm<ICreateUserData>({
            defaultValues: schema.getDefault(),
            resolver: yupResolver(schema),
            shouldFocusError: true,
        });

        const { control } = form;

        const handleClose = useCallback(() => {
            setIsOpenDrawer(false);
        }, [setIsOpenDrawer]);

        const handleOpen: ICreatePatientDrawerRef['open'] = useCallback(() => {
            setIsOpenDrawer(true);
        }, [form, setIsOpenDrawer]);

        const handleCreatePatient: SubmitHandler<ICreateUserData> = async data => {
            return createPatientMutationAsync(data, {
                onSuccess: response => {},
            });
        };

        useImperativeHandle(
            ref,
            () => {
                return {
                    open: handleOpen,
                    close: handleClose,
                };
            },
            [handleOpen, handleClose]
        );

        return (
            <CreatePatientDrawerWrapper
                title={t('create_with_entity_type', {
                    ns: 'action',
                    entity_type: t('patient', { ns: 'bkd.patient' }),
                })}
                open={isOpenDrawer}
                width={600}
                onClose={handleClose}
                destroyOnClose
            >
                <Form
                    labelAlign="left"
                    onSubmitCapture={form.handleSubmit(handleCreatePatient, console.debug)}
                    layout="vertical"
                >
                    <Form.ItemControl
                        control={control}
                        name="profile_picture"
                        label={t('profile_picture', { ns: 'bkd.user' })}
                        extra={t('profile_picture.extra', { ns: 'bkd.user' })}
                    >
                        <InputUpload />
                    </Form.ItemControl>
                    <Form.ItemControl
                        control={control}
                        name="email"
                        label={t('email', { ns: 'bkd.user' })}
                        required
                        extra={t('email.extra', { ns: 'bkd.user' })}
                    >
                        <Input />
                    </Form.ItemControl>
                    <Form.ItemControl
                        control={control}
                        name="password"
                        label={t('password', { ns: 'bkd.user' })}
                        required
                        extra={t('password.extra', { ns: 'bkd.user' })}
                    >
                        <Input.Password />
                    </Form.ItemControl>
                    <Form.ItemControl
                        control={control}
                        name="first_name"
                        label={t('first_name', { ns: 'bkd.user' })}
                        extra={t('first_name.extra', { ns: 'bkd.user' })}
                    >
                        <Input />
                    </Form.ItemControl>
                    <Form.ItemControl
                        control={control}
                        name="last_name"
                        label={t('last_name', { ns: 'bkd.user' })}
                        extra={t('last_name.extra', { ns: 'bkd.user' })}
                    >
                        <Input />
                    </Form.ItemControl>

                    <Form.Item>
                        <Flex justify="end">
                            <Space>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={isPendingCreatePatient}
                                >
                                    {t('create', { ns: 'action' })}
                                </Button>
                            </Space>
                        </Flex>
                    </Form.Item>
                </Form>
            </CreatePatientDrawerWrapper>
        );
    }
);

export default CreatePatientDrawer;
