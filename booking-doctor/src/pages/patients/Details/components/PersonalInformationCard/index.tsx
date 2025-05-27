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
import useUpdatePatientSchema from '@/services/patient/hooks/useUpdatePatientSchema';
import { useUpdatePatientMutation } from '@/services/patient/mutations';
import { getPatientQuery } from '@/services/patient/queries';
import { getHospitalsQuery } from '@/services/hospital/queries';
import { EditOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';
import { IHospital, IUpdatePatientData } from 'booking-patient-js';
import { useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { PersonalInformationCardWrapper } from './styles';

const PersonalInformationCard = () => {
    const { t } = useTranslation(['bkd.patient', 'pages.patient.details']);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const { patientId } = useParams<{ patientId: string }>();
    const schema = useUpdatePatientSchema();
    const { data: patient, isPending: isPendingPatient } = useQuery(getPatientQuery(Number(patientId)));
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

    const { mutateAsync: updatePatientMutationAsync, isPending: isPendingUpdatePatient } =
        useUpdatePatientMutation();

    const form = useForm<IUpdatePatientData>({
        defaultValues: {
            ...schema.getDefault(),
            user_id: patient?.user_id,
            bio: patient?.bio,
            education: patient?.education,
            experience: patient?.experience,
            hospital_id: patient?.hospital_id,
            member_of: patient?.member_of,
            profile_picture: patient?.profile_picture,
            publications: patient?.publications,
            specialties: patient?.specialties,
            title: patient?.title,
        },
        resolver: yupResolver(schema),
    });
    const { control: controlPatient } = form;

    const handleUpdatePatient: SubmitHandler<IUpdatePatientData> = async data => {
        if (!patientId) return;
        updatePatientMutationAsync(
            { patientId: Number(patientId), data },
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
                user_id: patient?.user_id,
                bio: patient?.bio,
                education: patient?.education,
                experience: patient?.experience,
                hospital_id: patient?.hospital_id,
                member_of: patient?.member_of,
                profile_picture: patient?.profile_picture,
                publications: patient?.publications,
                specialties: patient?.specialties,
                title: patient?.title,
            });
        }
    }, [patient]);

    return (
        <PersonalInformationCardWrapper
            title={
                <Flex justify="space-between">
                    <Typography.Title level={5}>
                        {t('tab.details.personal_information', { ns: 'pages.patient.details' })}
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
                onSubmitCapture={form.handleSubmit(handleUpdatePatient, console.debug)}
            >
                <Form.ItemControl
                    control={controlPatient}
                    name="hospital_id"
                    label={t('hospital_id', { ns: 'bkd.patient' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('hospital_id.extra', { ns: 'bkd.patient' })}
                >
                    {isEditing ? (
                        <Select options={hospitalOptions} />
                    ) : (
                        <Typography.Text ellipsis loading={isPendingPatient} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={controlPatient}
                    name="title"
                    label={t('title', { ns: 'bkd.patient' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('title.extra', { ns: 'bkd.patient' })}
                >
                    {isEditing ? <Input /> : <Typography.Text ellipsis loading={isPendingPatient} />}
                </Form.ItemControl>

                <Form.ItemControl
                    control={controlPatient}
                    name="specialties"
                    label={t('specialties', { ns: 'bkd.patient' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('specialties.extra', { ns: 'bkd.patient' })}
                >
                    {isEditing ? (
                        <Input.TextArea />
                    ) : (
                        <Typography.Paragraph loading={isPendingPatient} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={controlPatient}
                    name="education"
                    label={t('education', { ns: 'bkd.patient' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('education.extra', { ns: 'bkd.patient' })}
                >
                    {isEditing ? (
                        <Input.TextArea />
                    ) : (
                        <Typography.Paragraph loading={isPendingPatient} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={controlPatient}
                    name="experience"
                    label={t('experience', { ns: 'bkd.patient' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('experience.extra', { ns: 'bkd.patient' })}
                >
                    {isEditing ? (
                        <Input.TextArea />
                    ) : (
                        <Typography.Paragraph loading={isPendingPatient} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={controlPatient}
                    name="member_of"
                    label={t('member_of', { ns: 'bkd.patient' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('member_of.extra', { ns: 'bkd.patient' })}
                >
                    {isEditing ? (
                        <Input.TextArea />
                    ) : (
                        <Typography.Paragraph loading={isPendingPatient} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={controlPatient}
                    name="publications"
                    label={t('publications', { ns: 'bkd.patient' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('publications.extra', { ns: 'bkd.patient' })}
                >
                    {isEditing ? (
                        <Input.TextArea />
                    ) : (
                        <Typography.Paragraph loading={isPendingPatient} />
                    )}
                </Form.ItemControl>

                <Form.ItemControl
                    control={controlPatient}
                    name="bio"
                    label={t('bio', { ns: 'bkd.patient' })}
                    valuePropName={isEditing ? 'value' : 'children'}
                    extra={t('bio.extra', { ns: 'bkd.patient' })}
                >
                    {isEditing ? (
                        <Input.TextArea />
                    ) : (
                        <Typography.Paragraph loading={isPendingPatient} />
                    )}
                </Form.ItemControl>

                {isEditing && (
                    <Form.Item>
                        <Flex justify="end">
                            <Space>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={isPendingUpdatePatient}
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
