import { AxiosRequestConfig } from 'axios';
import { bookingDoctorAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { USER_PATH } from './paths';
import { ICreateUserData, IPatient, IUpdateUserData, IUser } from './types';

export const getPatientsAPI = async (config?: AxiosRequestConfig) => {
    const url = USER_PATH.GET_PATIENTS;

    const response = await bookingDoctorAxios.get<IPatient[]>(url, config);

    return response.data;
};

export const createUserAPI = async (
    data: ICreateUserData,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.CREATE_USER;
    const response = await bookingDoctorAxios.post<string>(url, data, config);

    return response.data;
};

export const updateUserAPI = async (
    id: IdType,
    data: IUpdateUserData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.UPDATE_USER, { id });

    const response = await bookingDoctorAxios.put<IUser>(url, data, config);

    return response.data;
};

export const deleteUserAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.DELETE_USER, { id });
    const response = await bookingDoctorAxios.delete<string>(url, config);

    return response.data;
};
