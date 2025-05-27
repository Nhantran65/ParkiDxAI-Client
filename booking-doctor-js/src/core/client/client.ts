import axios, { Axios, AxiosError, AxiosResponse } from 'axios';
import { THttpError } from '../error';
import { HttpResponse } from '../query';
import { HeaderKey } from './constants';
import { InitOption } from './types';

export let bookingDoctorAxios: Axios | null = null;

const init = (initOption: InitOption) => {
    bookingDoctorAxios = axios.create({
        baseURL:
            'https://fastapi-backend-route-sdx-assignment-nhantran.2.rahtiapp.fi',
        headers: {
            'content-type': 'application/json',
        },
    });

    function responseHandler<T = any>(response: AxiosResponse<T>) {
        // const config = response?.config;

        // if (config.raw) {
        //     return response;
        // }

        // return response.data;
        return response;
    }

    function responseErrorHandler(error: AxiosError<HttpResponse>) {
        const config = error?.config;
        if (config.raw) {
            return error;
        }

        if (initOption.globalErrorHandler) {
            return initOption.globalErrorHandler(error);
        }

        // return httpErrorHandler(response);
    }

    bookingDoctorAxios.interceptors.response.use(
        responseHandler,
        responseErrorHandler,
    );
};

const createInstance = () => {};

const changeAuthKey = (authKey: string) => {
    bookingDoctorAxios.defaults.headers.common[HeaderKey.AuthKey] =
        `Bearer ${authKey}`;
};

const clearAuthKey = () => {
    delete bookingDoctorAxios.defaults.headers.common[HeaderKey.AuthKey];
};

const globalErrorHandler = (error: THttpError) => {};

const bookingDoctorJs = {
    init,
    createInstance,
    changeAuthKey,
    clearAuthKey,
    globalErrorHandler,
};

export default bookingDoctorJs;
