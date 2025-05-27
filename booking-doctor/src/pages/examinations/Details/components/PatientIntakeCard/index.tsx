import { Form, Spin, Typography } from '1byte-react-design';
import ClinicalMeasurements from '@/pages/CreateExamination/components/ClinicalMeasurements';
import CognitiveAndFunctionalAssessments from '@/pages/CreateExamination/components/CognitiveAndFunctionalAssessments';
import DemographicDetails from '@/pages/CreateExamination/components/DemographicDetails';
import LifestyleFactors from '@/pages/CreateExamination/components/LifestyleFactors';
import MedicalHistory from '@/pages/CreateExamination/components/MedicalHistory';
import SelectDoctor from '@/pages/CreateExamination/components/SelectDoctor';
import Symptoms from '@/pages/CreateExamination/components/Symptoms';
import { getExaminationQuery } from '@/services/examination/queries';
import { useUpdateUserMutation } from '@/services/user/mutations';
import { useQuery } from '@tanstack/react-query';
import { IExamination } from 'booking-doctor-js';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { PatientIntakeCardWrapper } from './styles';

const PatientIntakeCard = () => {
    const { t } = useTranslation(['bkd.examination', 'pages.examination.details']);
    const { mutateAsync: updateUserMutationAsync, isPending: isPendingUpdateUser } =
        useUpdateUserMutation();
    const { examinationId } = useParams<{ examinationId: string }>();
    const { data: examination, isPending: isPendingExamination } = useQuery(
        getExaminationQuery(Number(examinationId))
    );

    const form = useForm<IExamination>({
        defaultValues: {
            ...examination,
        },
    });

    useEffect(() => {
        if (examination) {
            form.reset({
                ...examination,
            });
        }
    }, [examination]);

    return (
        <PatientIntakeCardWrapper
            title={
                <Typography.Title level={5}>
                    {t('tab.details.patient_intake', { ns: 'pages.examination.details' })}
                </Typography.Title>
            }
        >
            <Spin spinning={isPendingExamination}>
                <Form
                    labelCol={{ flex: '38%' }}
                    labelAlign="left"
                    // onSubmitCapture={form.handleSubmit(handleUpdateExamination, console.debug)}
                    style={{
                        pointerEvents: 'none',
                    }}
                >
                    <DemographicDetails form={form} />
                    <LifestyleFactors form={form} /> {/** 1 */}
                    <MedicalHistory form={form} /> {/** 2 */}
                    <ClinicalMeasurements form={form} /> {/** 3 */}
                    <CognitiveAndFunctionalAssessments form={form} /> {/** 4 */}
                    <Symptoms form={form} /> {/** 5 */}
                    <SelectDoctor form={form} /> {/** 6 */}
                </Form>
            </Spin>
        </PatientIntakeCardWrapper>
    );
};

export default PatientIntakeCard;
