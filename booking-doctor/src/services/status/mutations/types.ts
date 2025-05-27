import { IdType, IUpdateStatusData } from 'booking-doctor-js';

export interface IUpdateStatusMutationParams {
    statusId: IdType;
    data: IUpdateStatusData;
}
