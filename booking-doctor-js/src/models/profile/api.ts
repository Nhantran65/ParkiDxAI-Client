import { AxiosRequestConfig } from 'axios';
import { bookingDoctorAxios } from '../../core/client/client';
import { PROFILE_PATH } from './paths';
import { IProfile, IUpdateProfileData } from './types';

export const getProfileAPI = async (config?: AxiosRequestConfig) => {
    const url = PROFILE_PATH.GET_PROFILE;

    const response = await bookingDoctorAxios.get<IProfile>(url, config);

    return response.data;
};

export const updateProfileAPI = async (
    data: IUpdateProfileData,
    config?: AxiosRequestConfig,
) => {
    const url = PROFILE_PATH.UPDATE_PROFILE;

    const response = await bookingDoctorAxios.put<IProfile>(url, data, config);

    return response.data;
};
