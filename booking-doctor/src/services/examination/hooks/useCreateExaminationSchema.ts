import { ICreateExaminationData } from 'booking-doctor-js';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const useCreateExaminationSchema = () => {
    const { t } = useTranslation(['bkd.examination']);

    const schema: Yup.ObjectSchema<ICreateExaminationData> = Yup.object({
        doctor_id: Yup.number().label(t('doctor_id')).nullable(),
        email: Yup.string().email().label(t('email')).required(),
        status_id: Yup.number().label(t('status_id')).required(),
        age: Yup.number().label(t('age')).required(),
        gender: Yup.boolean().label(t('gender')).required(),
        ethnicity: Yup.number().label(t('ethnicity')).required(),
        education_level: Yup.number().label(t('education_level')).required(),
        bmi: Yup.number().label(t('bmi')).required(),
        smoking: Yup.boolean().label(t('smoking')).required(),
        alcohol_consumption: Yup.number().label(t('alcohol_consumption')).required(),
        physical_activity: Yup.number().label(t('physical_activity')).required(),
        diet_quality: Yup.number().label(t('diet_quality')).required(),
        sleep_quality: Yup.number().label(t('sleep_quality')).required(),
        family_history_parkinsons: Yup.boolean().label(t('family_history_parkinsons')).required(),
        traumatic_brain_injury: Yup.boolean().label(t('traumatic_brain_injury')).required(),
        hypertension: Yup.boolean().label(t('hypertension')).required(),
        diabetes: Yup.boolean().label(t('diabetes')).required(),
        depression: Yup.boolean().label(t('depression')).required(),
        stroke: Yup.boolean().label(t('stroke')).required(),
        systolic_bp: Yup.number().label(t('systolic_bp')).required(),
        diastolic_bp: Yup.number().label(t('diastolic_bp')).required(),
        cholesterol_total: Yup.number().label(t('cholesterol_total')).required(),
        cholesterol_ldl: Yup.number().label(t('cholesterol_ldl')).required(),
        cholesterol_hdl: Yup.number().label(t('cholesterol_hdl')).required(),
        cholesterol_triglycerides: Yup.number().label(t('cholesterol_triglycerides')).required(),
        updrs_score: Yup.number().label(t('updrs_score')).required(),
        moca_score: Yup.number().label(t('moca_score')).required(),
        functional_assessment: Yup.number().label(t('functional_assessment')).required(),
        tremor: Yup.boolean().label(t('tremor')).required(),
        rigidity: Yup.boolean().label(t('rigidity')).required(),
        bradykinesia: Yup.boolean().label(t('bradykinesia')).required(),
        postural_instability: Yup.boolean().label(t('postural_instability')).required(),
        speech_problems: Yup.boolean().label(t('speech_problems')).required(),
        sleep_disorders: Yup.boolean().label(t('sleep_disorders')).required(),
        constipation: Yup.boolean().label(t('constipation')).required(),
    });

    return schema;
};

export default useCreateExaminationSchema;
