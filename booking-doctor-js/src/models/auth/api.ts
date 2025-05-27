import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { bookingDoctorAxios } from '../../core/client/client';
import { AUTH_PATH } from './paths';
import { IAuthLoginData, IAuthLoginResponse, IAuthRegisterData } from './types';

/**
 * Register user
 */
export const authRegisterAPI = async (
    data: IAuthRegisterData,
    config?: AxiosRequestConfig,
) => {
    const url = AUTH_PATH.REGISTER;
    const response = await bookingDoctorAxios.post<HttpResponse<boolean>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Login user
 */
export const authLoginAPI = async (
    data: IAuthLoginData,
    config?: AxiosRequestConfig,
) => {
    const url = AUTH_PATH.LOGIN;
    const response = await bookingDoctorAxios.post<IAuthLoginResponse>(
        url,
        data,
        config,
    );

    return response.data;
};
