import {
    Button,
    DatePicker,
    Flex,
    Form,
    Input,
    notification,
    Space,
    Typography,
} from '1byte-react-design';
import PhoneInput from '@/components/PhoneInput/PhoneInput';
import useUpdateHospitalSchema from '@/services/hospital/hooks/useUpdateHospitalSchema';
import { useUpdateHospitalMutation } from '@/services/hospital/mutations';
import { getHospitalQuery } from '@/services/hospital/queries';
import { EditOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';
import { IUpdateHospitalData } from 'booking-doctor-js';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { getFormattedNumber } from 'react-phone-hooks';
import { useParams } from 'react-router';
import { GeneralInformationCardWrapper } from './styles';

const GeneralInformationCard = () => {
    const { t } = useTranslation(['bkd.hospital', 'pages.hospital.details']);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const { mutateAsync: updateHospitalMutationAsync, isPending: isPendingUpdateUser } =
        useUpdateHospitalMutation();
    const schema = useUpdateHospitalSchema();
    const { hospitalId } = useParams<{ hospitalId: string }>();
    const { data: hospital, isPending: isPendingHospital } = useQuery(
        getHospitalQuery(Number(hospitalId))
    );

    const form = useForm<IUpdateHospitalData>({
        defaultValues: {
            ...schema.getDefault(),
            address: hospital?.address,
            description: hospital?.description,
            email: hospital?.email,
            established: dayjs('2015-01-01', 'YYYY-MM-DD'),
            name: hospital?.name,
            phone: hospital?.phone,
            website: hospital?.website,
        },
        resolver: yupResolver(schema),
    });
    const { control } = form;

    const handleUpdateUser: SubmitHandler<IUpdateHospitalData> = async data => {
        if (!hospital?.id) return;
        updateHospitalMutationAsync(
            {
                hospitalId: hospital?.id,
                data: {
                    ...data,
                    established: dayjs(data.established).format('YYYY-MM-DD'),
                },
            },
            {
                onSuccess: (_, variables) => {
                    notification.success({
                        description: t('save.success_message', {
                            ns: 'action',
                            target_name: hospital?.name,
                            entity_type: t('hospital', { ns: 'bkd.hospital' }),
                        }),
                    });

                    setIsEditing(false);
                },
            }
        );
    };

    const handleCancelEditing = () => {
        setIsEditing(false);
        form.reset({
            ...schema.getDefault(),
            address: hospital?.address,
            description: hospital?.description,
            email: hospital?.email,
            established: dayjs('2015-01-01', 'YYYY-MM-DD'),
            name: hospital?.name,
            phone: hospital?.phone,
            website: hospital?.website,
        });
    };

    const handleOpenEdit = () => {
        setIsEditing(true);
    };

    useEffect(() => {
        if (hospital) {
            form.reset({
                ...schema.getDefault(),
                address: hospital?.address,
                description: hospital?.description,
                email: hospital?.email,
                established: dayjs('2015-01-01', 'YYYY-MM-DD'),
                name: hospital?.name,
                phone: hospital?.phone,
                website: hospital?.website,
            });
        }
    }, [hospital]);

    return (
        <GeneralInformationCardWrapper
            title={
                <Flex justify="space-between">
                    <Typography.Title level={5}>
                        {t('tab.details.general_information', { ns: 'pages.hospital.details' })}
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
                    name="name"
                    label={t('name')}
                    required
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('name.extra')}
                >
                    {isEditing ? (
                        <Input />
                    ) : (
                        <Typography.Text ellipsis loading={isPendingHospital} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={control}
                    name="email"
                    label={t('email')}
                    required
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('email.extra')}
                >
                    {isEditing ? (
                        <Input />
                    ) : (
                        <Typography.Text ellipsis loading={isPendingHospital} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={control}
                    name="address"
                    label={t('address')}
                    required
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('address.extra')}
                >
                    {isEditing ? (
                        <Input />
                    ) : (
                        <Typography.Text ellipsis loading={isPendingHospital} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={control}
                    name="website"
                    label={t('website')}
                    required
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('website.extra')}
                >
                    {isEditing ? (
                        <Input />
                    ) : (
                        <Typography.Text ellipsis loading={isPendingHospital} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={control}
                    name="phone"
                    label={t('phone')}
                    extra={t('phone.extra')}
                >
                    {isEditing ? (
                        <PhoneInput valueType="raw" />
                    ) : (
                        <Typography.Text ellipsis loading={isPendingHospital}>
                            {form.getValues('phone') && getFormattedNumber(form.getValues('phone'))}
                        </Typography.Text>
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={control}
                    name="established"
                    label={t('established')}
                    extra={t('established.extra')}
                >
                    {isEditing ? (
                        <DatePicker
                            style={{
                                width: '100%',
                            }}
                        />
                    ) : (
                        <Typography.Text
                            ellipsis
                            loading={isPendingHospital}
                            onClick={() => console.debug(form.getValues('established'))}
                        >
                            {form.getValues('established') &&
                                (form.getValues('established') as unknown as dayjs.Dayjs).format(
                                    'YYYY-MM-DD'
                                )}
                        </Typography.Text>
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={control}
                    name="description"
                    label={t('description')}
                    required
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('description.extra')}
                >
                    {isEditing ? (
                        <Input.TextArea />
                    ) : (
                        <Typography.Text ellipsis loading={isPendingHospital} />
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
        </GeneralInformationCardWrapper>
    );
};

export default GeneralInformationCard;
