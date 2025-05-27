import { IBaseObject, IdType } from '../base';

export interface IDoctorDecision extends IBaseObject {
    result_id: IdType;
    doctor_decision: boolean;
}

//#region API types
export interface IGetDoctorDecisionsParams {}

export interface ICreateDoctorDecisionData {
    result_id: IdType;

    doctor_decision: boolean;
}

export type IUpdateDoctorDecisionData = ICreateDoctorDecisionData;

//#endregion
