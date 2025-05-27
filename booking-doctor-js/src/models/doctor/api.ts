import { AxiosRequestConfig } from 'axios';
import { bookingDoctorAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { DOCTOR_PATH } from './paths';
import { ICreateDoctorData, IDoctor, IUpdateDoctorData } from './types';

export const getDoctorsAPI = async (config?: AxiosRequestConfig) => {
    const url = DOCTOR_PATH.GET_DOCTORS;
    const response = await bookingDoctorAxios.get<IDoctor[]>(url, config);

    return response.data;
};

export const getDoctorAPI = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(DOCTOR_PATH.GET_DOCTOR, { id });

    const response = await bookingDoctorAxios.get<IDoctor>(url, config);

    return response.data;
};

export const createDoctorAPI = async (
    data: ICreateDoctorData,
    config?: AxiosRequestConfig,
) => {
    const url = DOCTOR_PATH.CREATE_DOCTOR;
    const response = await bookingDoctorAxios.post<IDoctor>(url, data, config);

    return response.data;
};

export const updateDoctorAPI = async (
    id: IdType,
    data: IUpdateDoctorData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(DOCTOR_PATH.UPDATE_DOCTOR, {
        id,
    });
    const response = await bookingDoctorAxios.put<IDoctor>(url, data, config);

    return response.data;
};

export const deleteDoctorAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(DOCTOR_PATH.DELETE_DOCTOR, { id });
    const response = await bookingDoctorAxios.delete<string>(url, config);

    return response.data;
};
