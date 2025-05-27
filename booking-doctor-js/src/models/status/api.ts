import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { bookingDoctorAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { STATUSES_PATH } from './paths';
import {
    ICreateStatusData,
    IGetStatusesParams,
    IStatuses,
    IUpdateStatusData,
} from './types';

export const createStatusAPI = async (
    data?: ICreateStatusData,
    config?: AxiosRequestConfig,
) => {
    const url = STATUSES_PATH.CREATE_STATUS;

    const response = await bookingDoctorAxios.post<IStatuses>(
        url,
        data,
        config,
    );

    return response.data;
};

export const deleteStatusAPI = async (
    deviceId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(STATUSES_PATH.DELETE_STATUS, {
        id: deviceId,
    });

    return await bookingDoctorAxios.delete<HttpResponse<boolean>>(url, config);
};

export const getStatusAPI = async (
    deviceId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(STATUSES_PATH.GET_STATUS, {
        id: deviceId,
    });

    const response = await bookingDoctorAxios.get<IStatuses>(url, config);

    return response.data;
};

export const getStatusesAPI = async (
    params?: IGetStatusesParams,
    config?: AxiosRequestConfig,
) => {
    const url = STATUSES_PATH.GET_STATUSES;

    const response = await bookingDoctorAxios.get<IStatuses[]>(url, {
        params,
        ...config,
    });

    return response.data;
};

export const updateStatusAPI = async (
    deviceId: IdType,
    data: IUpdateStatusData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(STATUSES_PATH.UPDATE_STATUS, {
        id: deviceId,
    });

    const response = await bookingDoctorAxios.put<IStatuses>(url, data, config);

    return response.data;
};
