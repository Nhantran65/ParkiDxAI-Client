import { IdType, IUpdateUserData } from 'booking-doctor-js';

export interface IUpdateUserMutationParams {
    userId: IdType;
    data: IUpdateUserData;
}
