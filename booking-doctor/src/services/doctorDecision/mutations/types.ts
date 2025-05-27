import { IdType, IUpdateDoctorDecisionData } from 'booking-doctor-js';

export interface IUpdateDoctorDecisionMutationParams {
    doctorDecisionId: IdType;
    data: IUpdateDoctorDecisionData;
}
