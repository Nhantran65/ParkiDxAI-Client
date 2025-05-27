import {
    Button,
    Col,
    DatePicker,
    Flex,
    Form,
    Input,
    RdBaseOption,
    Row,
    Space,
} from '1byte-react-design';
import PhoneInput from '@/components/PhoneInput/PhoneInput';
import useCreateHospitalSchema from '@/services/hospital/hooks/useCreateHospitalSchema';
import { useCreateHospitalMutation } from '@/services/hospital/mutations';
import { getHospitalsQuery } from '@/services/hospital/queries';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';
import { ICreateHospitalData, IHospital } from 'booking-doctor-js';
import { forwardRef, useCallback, useImperativeHandle, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CreateHospitalDrawerWrapper } from './styles';
import { ICreateHospitalDrawerProps, ICreateHospitalDrawerRef } from './types';

const CreateHospitalDrawer = forwardRef<ICreateHospitalDrawerRef, ICreateHospitalDrawerProps>(
    (props, ref) => {
        const {} = props;
        const { t } = useTranslation(['bkd.hospital', 'action']);
        const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
        const { data: hospital } = useQuery(getHospitalsQuery());

        const hospitalOptions = useMemo(() => {
            return hospital?.map(
                hospital =>
                    ({
                        label: hospital.name,
                        value: hospital.id,
                    } as RdBaseOption<IHospital['id']>)
            );
        }, [hospital]);

        const schema = useCreateHospitalSchema();
        const { mutateAsync: createHospitalMutationAsync, isPending: isPendingCreateHospital } =
            useCreateHospitalMutation();

        const form = useForm<ICreateHospitalData>({
            defaultValues: schema.getDefault(),
            resolver: yupResolver(schema),
            shouldFocusError: true,
        });

        const { control } = form;

        const handleClose = useCallback(() => {
            setIsOpenDrawer(false);
        }, [setIsOpenDrawer]);

        const handleOpen: ICreateHospitalDrawerRef['open'] = useCallback(() => {
            setIsOpenDrawer(true);
        }, [form, setIsOpenDrawer]);

        const handleCreateHospital: SubmitHandler<ICreateHospitalData> = async data => {
            return createHospitalMutationAsync(data, {
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
            <CreateHospitalDrawerWrapper
                title={t('create_with_entity_type', {
                    ns: 'action',
                    entity_type: t('hospital', { ns: 'bkd.hospital' }),
                })}
                open={isOpenDrawer}
                width={600}
                onClose={handleClose}
                destroyOnClose
            >
                <Form
                    labelAlign="left"
                    onSubmitCapture={form.handleSubmit(handleCreateHospital, console.debug)}
                    layout="vertical"
                >
                    <Form.ItemControl
                        control={control}
                        name="name"
                        label={t('name')}
                        extra={t('name.extra')}
                        required
                    >
                        <Input />
                    </Form.ItemControl>
                    <Form.ItemControl
                        control={control}
                        name="email"
                        label={t('email')}
                        extra={t('email.extra')}
                    >
                        <Input />
                    </Form.ItemControl>
                    <Form.ItemControl
                        control={control}
                        name="address"
                        label={t('address')}
                        extra={t('address.extra')}
                    >
                        <Input />
                    </Form.ItemControl>

                    <Form.ItemControl
                        control={control}
                        name="website"
                        label={t('website')}
                        extra={t('website.extra')}
                    >
                        <Input />
                    </Form.ItemControl>

                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.ItemControl
                                control={control}
                                name="phone"
                                label={t('phone')}
                                extra={t('phone.extra')}
                            >
                                <PhoneInput valueType="raw" />
                            </Form.ItemControl>
                        </Col>

                        <Col span={12}>
                            <Form.ItemControl
                                control={control}
                                name="established"
                                label={t('established')}
                                extra={t('established.extra')}
                            >
                                <DatePicker
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.ItemControl>
                        </Col>
                    </Row>

                    <Form.ItemControl
                        control={control}
                        name="description"
                        label={t('description')}
                        extra={t('description.extra')}
                    >
                        <Input.TextArea />
                    </Form.ItemControl>

                    <Form.Item>
                        <Flex justify="end">
                            <Space>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={isPendingCreateHospital}
                                >
                                    {t('create', { ns: 'action' })}
                                </Button>
                            </Space>
                        </Flex>
                    </Form.Item>
                </Form>
            </CreateHospitalDrawerWrapper>
        );
    }
);

export default CreateHospitalDrawer;
