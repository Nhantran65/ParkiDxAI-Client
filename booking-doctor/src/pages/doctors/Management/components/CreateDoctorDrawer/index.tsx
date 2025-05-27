import { Button, Flex, Form, Input, RdBaseOption, Select, Space } from '1byte-react-design';
import useCreateDoctorSchema from '@/services/doctor/hooks/useCreateDoctorSchema';
import { useCreateDoctorMutation } from '@/services/doctor/mutations';
import { getHospitalsQuery } from '@/services/hospital/queries';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';
import { ICreateDoctorData, IHospital } from 'booking-doctor-js';
import { forwardRef, useCallback, useImperativeHandle, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CreateDoctorDrawerWrapper } from './styles';
import { ICreateDoctorDrawerProps, ICreateDoctorDrawerRef } from './types';
import { InputUpload } from '@/components/Input/InputUpload';

const CreateDoctorDrawer = forwardRef<ICreateDoctorDrawerRef, ICreateDoctorDrawerProps>(
    (props, ref) => {
        const {} = props;
        const { t } = useTranslation(['bkd.doctor', 'action']);
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

        const schema = useCreateDoctorSchema();
        const { mutateAsync: createDoctorMutationAsync, isPending: isPendingCreateDoctor } =
            useCreateDoctorMutation();

        const form = useForm<ICreateDoctorData>({
            defaultValues: schema.getDefault(),
            resolver: yupResolver(schema),
            shouldFocusError: true,
        });

        const { control } = form;

        const handleClose = useCallback(() => {
            setIsOpenDrawer(false);
        }, [setIsOpenDrawer]);

        const handleOpen: ICreateDoctorDrawerRef['open'] = useCallback(() => {
            setIsOpenDrawer(true);
        }, [form, setIsOpenDrawer]);

        const handleCreateDoctor: SubmitHandler<ICreateDoctorData> = async data => {
            return createDoctorMutationAsync(data, {
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
            <CreateDoctorDrawerWrapper
                title={t('create_with_entity_type', {
                    ns: 'action',
                    entity_type: t('doctor', { ns: 'bkd.doctor' }),
                })}
                open={isOpenDrawer}
                width={600}
                onClose={handleClose}
                destroyOnClose
            >
                <Form
                    labelAlign="left"
                    onSubmitCapture={form.handleSubmit(handleCreateDoctor, console.debug)}
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

                    {/* Personal information */}
                    <Form.ItemControl
                        control={control}
                        name="hospital_id"
                        label={t('hospital_id', { ns: 'bkd.doctor' })}
                        extra={t('hospital_id.extra', { ns: 'bkd.doctor' })}
                    >
                        <Select options={hospitalOptions} />
                    </Form.ItemControl>

                    <Form.ItemControl
                        control={control}
                        name="title"
                        label={t('title', { ns: 'bkd.doctor' })}
                        extra={t('title.extra', { ns: 'bkd.doctor' })}
                    >
                        <Input />
                    </Form.ItemControl>

                    <Form.ItemControl
                        control={control}
                        name="specialties"
                        label={t('specialties', { ns: 'bkd.doctor' })}
                        extra={t('specialties.extra', { ns: 'bkd.doctor' })}
                    >
                        <Input.TextArea />
                    </Form.ItemControl>

                    <Form.ItemControl
                        control={control}
                        name="education"
                        label={t('education', { ns: 'bkd.doctor' })}
                        extra={t('education.extra', { ns: 'bkd.doctor' })}
                    >
                        <Input.TextArea />
                    </Form.ItemControl>

                    <Form.ItemControl
                        control={control}
                        name="experience"
                        label={t('experience', { ns: 'bkd.doctor' })}
                        extra={t('experience.extra', { ns: 'bkd.doctor' })}
                    >
                        <Input.TextArea />
                    </Form.ItemControl>

                    <Form.ItemControl
                        control={control}
                        name="member_of"
                        label={t('member_of', { ns: 'bkd.doctor' })}
                        extra={t('member_of.extra', { ns: 'bkd.doctor' })}
                    >
                        <Input.TextArea />
                    </Form.ItemControl>

                    <Form.ItemControl
                        control={control}
                        name="publications"
                        label={t('publications', { ns: 'bkd.doctor' })}
                        extra={t('publications.extra', { ns: 'bkd.doctor' })}
                    >
                        <Input.TextArea />
                    </Form.ItemControl>

                    <Form.ItemControl
                        control={control}
                        name="bio"
                        label={t('bio', { ns: 'bkd.doctor' })}
                        extra={t('bio.extra', { ns: 'bkd.doctor' })}
                    >
                        <Input.TextArea />
                    </Form.ItemControl>

                    <Form.Item>
                        <Flex justify="end">
                            <Space>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={isPendingCreateDoctor}
                                >
                                    {t('create', { ns: 'action' })}
                                </Button>
                            </Space>
                        </Flex>
                    </Form.Item>
                </Form>
            </CreateDoctorDrawerWrapper>
        );
    }
);

export default CreateDoctorDrawer;
