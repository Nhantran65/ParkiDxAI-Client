import { AxiosError, AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../query';

declare module 'axios' {
    export interface AxiosRequestConfig {
        raw?: boolean;
        silent?: boolean;
        ignoreGlobalException?: boolean;
        context?: string;
    }
}

export type InitOption = {
    globalErrorHandler?: (error: AxiosError<HttpResponse>) => void;
};

export interface JfwAxiosRequestConfig extends AxiosRequestConfig {}
