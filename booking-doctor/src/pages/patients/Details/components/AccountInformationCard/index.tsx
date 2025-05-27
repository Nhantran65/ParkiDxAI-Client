import { Button, Flex, Form, Input, notification, Space, Typography } from '1byte-react-design';
import useUpdateUserSchema from '@/services/user/hooks/useUpdateUserSchema';
import { useUpdateUserMutation } from '@/services/user/mutations';
import { getPatientsQuery } from '@/services/user/queries';
import { EditOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';
import { IUpdateUserData, UserRole } from 'booking-doctor-js';
import { useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { AccountInformationCardWrapper } from './styles';

const AccountInformationCard = () => {
    const { t } = useTranslation(['bkd.patient', 'pages.patient.details']);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const { mutateAsync: updateUserMutationAsync, isPending: isPendingUpdateUser } =
        useUpdateUserMutation();
    const schema = useUpdateUserSchema();
    const { patientId } = useParams<{ patientId: string }>();
    const { data: patients, isPending: isPendingPatients } = useQuery(getPatientsQuery());

    const patient = useMemo(() => {
        return patients?.find(pt => pt.id === Number(patientId));
    }, [patientId, patients]);

    const form = useForm<IUpdateUserData>({
        defaultValues: {
            ...schema.getDefault(),
            email: patient?.email,
            first_name: patient?.first_name,
            last_name: patient?.last_name,
            role: patient?.role || UserRole.Patient,
        },
        resolver: yupResolver(schema),
    });
    const { control } = form;

    const handleUpdateUser: SubmitHandler<IUpdateUserData> = async data => {
        if (!patient?.id) return;
        updateUserMutationAsync(
            { userId: patient?.id, data },
            {
                onSuccess: (_, variables) => {
                    notification.success({
                        description: t('save.success_message', {
                            ns: 'action',
                            target_name: patient?.email,
                            entity_type: t('patient', { ns: 'bkd.patient' }),
                        }),
                    });

                    setIsEditing(false);
                },
            }
        );
    };

    const handleCancelEditing = () => {
        setIsEditing(false);
        form.reset(schema.getDefault());
    };

    const handleOpenEdit = () => {
        setIsEditing(true);
    };

    useEffect(() => {
        if (patient) {
            form.reset({
                ...schema.getDefault(),
                email: patient?.email,
                first_name: patient?.first_name,
                last_name: patient?.last_name,
                role: patient?.role || UserRole.Patient,
            });
        }
    }, [patient]);

    return (
        <AccountInformationCardWrapper
            title={
                <Flex justify="space-between">
                    <Typography.Title level={5}>
                        {t('tab.details.account_information', { ns: 'pages.patient.details' })}
                    </Typography.Title>

                    <Space>
                        {isEditing ? (
                            <Button onClick={handleCancelEditing}>
                                {t('cancel', { ns: 'action' })}
                            </Button>
                        ) : (
                            <Button
                                type="primary"
                                icon={<EditOutlined />}
                                onClick={handleOpenEdit}
                            />
                        )}
                    </Space>
                </Flex>
            }
        >
            <Form
                labelCol={{ flex: '38%' }}
                labelAlign="left"
                onSubmitCapture={form.handleSubmit(handleUpdateUser, console.debug)}
            >
                <Form.ItemControl
                    control={control}
                    name="email"
                    label={t('email', { ns: 'bkd.patient' })}
                    required
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('email.extra', { ns: 'bkd.patient' })}
                >
                    {isEditing ? (
                        <Input disabled />
                    ) : (
                        <Typography.Text ellipsis loading={isPendingPatients} />
                    )}
                </Form.ItemControl>
                <Form.ItemControl
                    control={control}
                    name="first_name"
                    label={t('first_name', { ns: 'bkd.patient' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('first_name.extra', { ns: 'bkd.patient' })}
                >
                    {isEditing ? (
                        <Input />
                    ) : (
                        <Typography.Text ellipsis loading={isPendingPatients} />
                    )}
                </Form.ItemControl>
                <Form.ItemControl
                    control={control}
                    name="last_name"
                    label={t('last_name', { ns: 'bkd.patient' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('last_name.extra', { ns: 'bkd.patient' })}
                >
                    {isEditing ? (
                        <Input />
                    ) : (
                        <Typography.Text ellipsis loading={isPendingPatients} />
                    )}
                </Form.ItemControl>

                {isEditing && (
                    <Form.Item>
                        <Flex justify="end">
                            <Space>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={isPendingUpdateUser}
                                >
                                    {t('save', { ns: 'action' })}
                                </Button>
                            </Space>
                        </Flex>
                    </Form.Item>
                )}
            </Form>
        </AccountInformationCardWrapper>
    );
};

export default AccountInformationCard;
