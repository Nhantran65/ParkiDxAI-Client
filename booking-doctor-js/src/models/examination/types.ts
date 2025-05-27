import { IBaseObject, IdType } from '../base';

export interface IExamination extends IBaseObject {
    doctor_id: IdType | null;
    email: string;
    status_id: IdType;
    age: number;
    gender: boolean;
    ethnicity: number;
    education_level: number;
    bmi: number;
    smoking: boolean;
    alcohol_consumption: number;
    physical_activity: number;
    diet_quality: number;
    sleep_quality: number;
    family_history_parkinsons: boolean;
    traumatic_brain_injury: boolean;
    hypertension: boolean;
    diabetes: boolean;
    depression: boolean;
    stroke: boolean;
    systolic_bp: number;
    diastolic_bp: number;
    cholesterol_total: number;
    cholesterol_ldl: number;
    cholesterol_hdl: number;
    cholesterol_triglycerides: number;
    updrs_score: number;
    moca_score: number;
    functional_assessment: number;
    tremor: boolean;
    rigidity: boolean;
    bradykinesia: boolean;
    postural_instability: boolean;
    speech_problems: boolean;
    sleep_disorders: boolean;
    constipation: boolean;
    diagnosis: boolean;
}

//#region API types
export interface ICreateExaminationData {
    doctor_id?: IdType | null;
    email: string;
    status_id: IdType;
    age: number;
    gender: boolean;
    ethnicity: number;
    education_level: number;
    bmi: number;
    smoking: boolean;
    alcohol_consumption: number;
    physical_activity: number;
    diet_quality: number;
    sleep_quality: number;
    family_history_parkinsons: boolean;
    traumatic_brain_injury: boolean;
    hypertension: boolean;
    diabetes: boolean;
    depression: boolean;
    stroke: boolean;
    systolic_bp: number;
    diastolic_bp: number;
    cholesterol_total: number;
    cholesterol_ldl: number;
    cholesterol_hdl: number;
    cholesterol_triglycerides: number;
    updrs_score: number;
    moca_score: number;
    functional_assessment: number;
    tremor: boolean;
    rigidity: boolean;
    bradykinesia: boolean;
    postural_instability: boolean;
    speech_problems: boolean;
    sleep_disorders: boolean;
    constipation: boolean;
}
//#endregion
