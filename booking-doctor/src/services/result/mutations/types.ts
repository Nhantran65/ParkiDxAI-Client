import { IdType, IUpdateHospitalData } from 'booking-doctor-js';

export interface IUpdateHospitalMutationParams {
    hospitalId: IdType;
    data: IUpdateHospitalData;
}
