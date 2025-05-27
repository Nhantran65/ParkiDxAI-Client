import { IdType, IUpdateDoctorData } from 'booking-doctor-js';

export interface IUpdateDoctorMutationParams {
    doctorId: IdType;
    data: IUpdateDoctorData;
}
