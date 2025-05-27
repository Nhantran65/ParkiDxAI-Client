import { IdType, IUpdateProfileData } from 'booking-doctor-js';

export interface IUpdateProfileMutationParams {
    profileId: IdType;
    data: IUpdateProfileData;
}
