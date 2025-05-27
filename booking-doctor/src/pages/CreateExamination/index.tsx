import {
    Button,
    Carousel,
    Flex,
    Form,
    notification,
    Popover,
    RdCarouselRef,
} from '1byte-react-design';
import useCreateExaminationSchema from '@/services/examination/hooks/useCreateExaminationSchema';
import { useCreateExaminationMutation } from '@/services/examination/mutations';
import { ArrowRightOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { StepsProps } from 'antd';
import { ICreateExaminationData } from 'booking-doctor-js';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ClinicalMeasurements from './components/ClinicalMeasurements';
import CognitiveAndFunctionalAssessments from './components/CognitiveAndFunctionalAssessments';
import DemographicDetails from './components/DemographicDetails';
import LifestyleFactors from './components/LifestyleFactors';
import MedicalHistory from './components/MedicalHistory';

import { PATHS } from '@/router/paths';
import { useNavigate } from 'react-router';
import SelectDoctor from './components/SelectDoctor';
import Symptoms from './components/Symptoms';
import { CardStyled, CreateExaminationWrapper, StepsStyled } from './styles';

const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
    <Popover
        content={
            <span>
                step {index} status: {status}
            </span>
        }
    >
        {dot}
    </Popover>
);

const CreateExamination = () => {
    const carouselRef = useRef<RdCarouselRef>(null);
    const [currentStep, setCurrentStep] = useState(0);
    const schema = useCreateExaminationSchema();
    const navigate = useNavigate();
    const { mutateAsync: createExaminationMutationAsync, isPending } =
        useCreateExaminationMutation();

    const handleSubmit: SubmitHandler<ICreateExaminationData> = async data => {
        await createExaminationMutationAsync(data, {
            onSuccess: async data => {
                notification.success({
                    description:
                        'Your intake information has been successfully submitted. A follow-up link has been sent to your email so you can track your case. You’ll be notified once a doctor has reviewed your information.',
                });

                navigate(PATHS.HOME.SELF);
            },
        });
    };

    const form = useForm<ICreateExaminationData>({
        resolver: yupResolver(schema),
        // defaultValues: {
        //     ...schema.getDefault(),
        //     status_id: 1,
        // },
        defaultValues: {
            constipation: true,
            sleep_disorders: true,
            speech_problems: true,
            postural_instability: true,
            bradykinesia: true,
            rigidity: true,
            tremor: true,
            functional_assessment: 4,
            moca_score: 3,
            updrs_score: 2,
            cholesterol_triglycerides: 50,
            cholesterol_hdl: 150,
            cholesterol_ldl: 50,
            cholesterol_total: 150,
            diastolic_bp: 60,
            systolic_bp: 90,
            stroke: true,
            depression: true,
            diabetes: true,
            hypertension: true,
            traumatic_brain_injury: true,
            family_history_parkinsons: true,
            sleep_quality: 5,
            diet_quality: 5,
            physical_activity: 5,
            alcohol_consumption: 5,
            smoking: true,
            bmi: 9,
            education_level: 1,
            ethnicity: 1,
            gender: true,
            age: 7,
            status_id: 1,
            email: 'test@gmail.com',
            doctor_id: 3,
        },
    });

    const handleContinue = async () => {
        if (currentStep === 6) {
            form.handleSubmit(handleSubmit, error => console.debug(error))();
        } else {
            let isValid = false;
            switch (currentStep) {
                case 0:
                    isValid = await form.trigger(['age', 'gender', 'ethnicity', 'education_level']);
                    break;
                case 1:
                    isValid = await form.trigger([
                        'bmi',
                        'smoking',
                        'alcohol_consumption',
                        'physical_activity',
                        'diet_quality',
                        'sleep_quality',
                    ]);
                    break;
                case 2:
                    isValid = await form.trigger([
                        'family_history_parkinsons',
                        'traumatic_brain_injury',
                        'hypertension',
                        'diabetes',
                        'depression',
                        'stroke',
                    ]);
                    break;
                case 3:
                    isValid = await form.trigger([
                        'systolic_bp',
                        'diastolic_bp',
                        'cholesterol_total',
                        'cholesterol_ldl',
                        'cholesterol_hdl',
                        'cholesterol_triglycerides',
                    ]);
                    break;
                case 4:
                    isValid = await form.trigger([
                        'updrs_score',
                        'moca_score',
                        'functional_assessment',
                    ]);
                    break;
                case 5:
                    isValid = await form.trigger([
                        'tremor',
                        'rigidity',
                        'bradykinesia',
                        'postural_instability',
                        'speech_problems',
                        'sleep_disorders',
                        'constipation',
                    ]);
                    break;
                case 6:
                    isValid = await form.trigger(['doctor_id']);
                    break;
            }

            if (isValid) {
                carouselRef.current?.next();
                setCurrentStep(currentStep + 1);
            }
        }
    };

    return (
        <CreateExaminationWrapper>
            <Flex
                style={{
                    paddingTop: 40,
                }}
                justify={'center'}
                align={'center'}
            >
                <StepsStyled
                    current={currentStep}
                    progressDot={customDot}
                    items={[
                        {
                            title: 'Demographic Details',
                        },
                        {
                            title: 'Lifestyle Factors',
                        },
                        {
                            title: 'Medical History',
                        },
                        {
                            title: 'Clinical Measurements',
                        },
                        {
                            title: 'Cognitive and Functional Assessments',
                        },
                        {
                            title: 'Symptoms',
                        },
                    ]}
                />
            </Flex>

            <Flex
                justify={'center'}
                align={'center'}
                style={{
                    marginTop: 100,
                }}
            >
                <CardStyled
                    style={{
                        padding: 28,
                    }}
                >
                    <Form
                        labelCol={{
                            flex: '38%',
                        }}
                        labelAlign="right"
                        colon={true}
                    >
                        <Carousel ref={carouselRef} infinite={false}>
                            <DemographicDetails form={form} /> {/** 0 */}
                            <LifestyleFactors form={form} /> {/** 1 */}
                            <MedicalHistory form={form} /> {/** 2 */}
                            <ClinicalMeasurements form={form} /> {/** 3 */}
                            <CognitiveAndFunctionalAssessments form={form} /> {/** 4 */}
                            <Symptoms form={form} /> {/** 5 */}
                            <SelectDoctor form={form} /> {/** 6 */}
                        </Carousel>

                        <Button
                            type="primary"
                            htmlType="button"
                            block
                            onClick={() => handleContinue()}
                            loading={isPending}
                        >
                            {currentStep === 6 ? (
                                <>
                                    Finish <ArrowRightOutlined />
                                </>
                            ) : (
                                <>
                                    Continue <ArrowRightOutlined />
                                </>
                            )}
                        </Button>
                    </Form>
                </CardStyled>
            </Flex>
        </CreateExaminationWrapper>
    );
};

export default CreateExamination;
