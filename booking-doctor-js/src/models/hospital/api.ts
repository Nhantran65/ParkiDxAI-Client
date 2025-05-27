import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { bookingDoctorAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { HOSPITAL_PATH } from './paths';
import {
    ICreateHospitalData,
    IGetHospitalsParams,
    IHospital,
    IUpdateHospitalData,
} from './types';

export const createHospitalAPI = async (
    data?: ICreateHospitalData,
    config?: AxiosRequestConfig,
) => {
    const url = HOSPITAL_PATH.CREATE_HOSPITAL;

    const response = await bookingDoctorAxios.post<IHospital>(
        url,
        data,
        config,
    );

    return response.data;
};

export const deleteHospitalAPI = async (
    deviceId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(HOSPITAL_PATH.DELETE_HOSPITAL, {
        id: deviceId,
    });

    return await bookingDoctorAxios.delete<HttpResponse<boolean>>(url, config);
};

export const getHospitalAPI = async (
    deviceId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(HOSPITAL_PATH.GET_HOSPITAL, {
        id: deviceId,
    });

    const response = await bookingDoctorAxios.get<IHospital>(url, config);

    return response.data;
};

export const getHospitalsAPI = async (
    params?: IGetHospitalsParams,
    config?: AxiosRequestConfig,
) => {
    const url = HOSPITAL_PATH.GET_HOSPITALS;

    const response = await bookingDoctorAxios.get<IHospital[]>(url, {
        params,
        ...config,
    });

    return response.data;
};

export const updateHospitalAPI = async (
    deviceId: IdType,
    data: IUpdateHospitalData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(HOSPITAL_PATH.UPDATE_HOSPITAL, {
        id: deviceId,
    });

    const response = await bookingDoctorAxios.put<IHospital>(url, data, config);

    return response.data;
};
