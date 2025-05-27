import {
    Button,
    Flex,
    Form,
    Input,
    notification,
    RdBaseOption,
    Select,
    Space,
    Typography,
} from '1byte-react-design';
import useUpdateDoctorSchema from '@/services/doctor/hooks/useUpdateDoctorSchema';
import { useUpdateDoctorMutation } from '@/services/doctor/mutations';
import { getDoctorQuery } from '@/services/doctor/queries';
import { getHospitalsQuery } from '@/services/hospital/queries';
import { EditOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';
import { IHospital, IUpdateDoctorData } from 'booking-doctor-js';
import { useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { PersonalInformationCardWrapper } from './styles';

const PersonalInformationCard = () => {
    const { t } = useTranslation(['bkd.doctor', 'pages.doctor.details']);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const { doctorId } = useParams<{ doctorId: string }>();
    const schema = useUpdateDoctorSchema();
    const { data: doctor, isPending: isPendingDoctor } = useQuery(getDoctorQuery(Number(doctorId)));
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

    const { mutateAsync: updateDoctorMutationAsync, isPending: isPendingUpdateDoctor } =
        useUpdateDoctorMutation();

    const form = useForm<IUpdateDoctorData>({
        defaultValues: {
            ...schema.getDefault(),
            user_id: doctor?.user_id,
            bio: doctor?.bio,
            education: doctor?.education,
            experience: doctor?.experience,
            hospital_id: doctor?.hospital_id,
            member_of: doctor?.member_of,
            profile_picture: doctor?.profile_picture,
            publications: doctor?.publications,
            specialties: doctor?.specialties,
            title: doctor?.title,
        },
        resolver: yupResolver(schema),
    });
    const { control: controlDoctor } = form;

    const handleUpdateDoctor: SubmitHandler<IUpdateDoctorData> = async data => {
        if (!doctorId) return;
        updateDoctorMutationAsync(
            { doctorId: Number(doctorId), data },
            {
                onSuccess: (_, variables) => {
                    notification.success({
                        description: t('save.success_message', {
                            ns: 'action',
                            target_name: doctor?.email,
                            entity_type: t('doctor', { ns: 'bkd.doctor' }),
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
        if (doctor) {
            form.reset({
                ...schema.getDefault(),
                user_id: doctor?.user_id,
                bio: doctor?.bio,
                education: doctor?.education,
                experience: doctor?.experience,
                hospital_id: doctor?.hospital_id,
                member_of: doctor?.member_of,
                profile_picture: doctor?.profile_picture,
                publications: doctor?.publications,
                specialties: doctor?.specialties,
                title: doctor?.title,
            });
        }
    }, [doctor]);

    return (
        <PersonalInformationCardWrapper
            title={
                <Flex justify="space-between">
                    <Typography.Title level={5}>
                        {t('tab.details.personal_information', { ns: 'pages.doctor.details' })}
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
                onSubmitCapture={form.handleSubmit(handleUpdateDoctor, console.debug)}
            >
                <Form.ItemControl
                    control={controlDoctor}
                    name="hospital_id"
                    label={t('hospital_id', { ns: 'bkd.doctor' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('hospital_id.extra', { ns: 'bkd.doctor' })}
                >
                    {isEditing ? (
                        <Select options={hospitalOptions} />
                    ) : (
                        <Typography.Text ellipsis loading={isPendingDoctor} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={controlDoctor}
                    name="title"
                    label={t('title', { ns: 'bkd.doctor' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('title.extra', { ns: 'bkd.doctor' })}
                >
                    {isEditing ? <Input /> : <Typography.Text ellipsis loading={isPendingDoctor} />}
                </Form.ItemControl>

                <Form.ItemControl
                    control={controlDoctor}
                    name="specialties"
                    label={t('specialties', { ns: 'bkd.doctor' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('specialties.extra', { ns: 'bkd.doctor' })}
                >
                    {isEditing ? (
                        <Input.TextArea />
                    ) : (
                        <Typography.Paragraph loading={isPendingDoctor} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={controlDoctor}
                    name="education"
                    label={t('education', { ns: 'bkd.doctor' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('education.extra', { ns: 'bkd.doctor' })}
                >
                    {isEditing ? (
                        <Input.TextArea />
                    ) : (
                        <Typography.Paragraph loading={isPendingDoctor} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={controlDoctor}
                    name="experience"
                    label={t('experience', { ns: 'bkd.doctor' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('experience.extra', { ns: 'bkd.doctor' })}
                >
                    {isEditing ? (
                        <Input.TextArea />
                    ) : (
                        <Typography.Paragraph loading={isPendingDoctor} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={controlDoctor}
                    name="member_of"
                    label={t('member_of', { ns: 'bkd.doctor' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('member_of.extra', { ns: 'bkd.doctor' })}
                >
                    {isEditing ? (
                        <Input.TextArea />
                    ) : (
                        <Typography.Paragraph loading={isPendingDoctor} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={controlDoctor}
                    name="publications"
                    label={t('publications', { ns: 'bkd.doctor' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('publications.extra', { ns: 'bkd.doctor' })}
                >
                    {isEditing ? (
                        <Input.TextArea />
                    ) : (
                        <Typography.Paragraph loading={isPendingDoctor} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={controlDoctor}
                    name="bio"
                    label={t('bio', { ns: 'bkd.doctor' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('bio.extra', { ns: 'bkd.doctor' })}
                >
                    {isEditing ? (
                        <Input.TextArea />
                    ) : (
                        <Typography.Paragraph loading={isPendingDoctor} />
                    )}
                </Form.ItemControl>

                {isEditing && (
                    <Form.Item>
                        <Flex justify="end">
                            <Space>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={isPendingUpdateDoctor}
                                >
                                    {t('save', { ns: 'action' })}
                                </Button>
                            </Space>
                        </Flex>
                    </Form.Item>
                )}
            </Form>
        </PersonalInformationCardWrapper>
    );
};

export default PersonalInformationCard;
