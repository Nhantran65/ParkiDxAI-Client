import { AxiosRequestConfig } from 'axios';
import { bookingDoctorAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { EXAMINATION_PATH } from './paths';
import { ICreateExaminationData, IExamination } from './types';

export const createExaminationAPI = async (
    data: ICreateExaminationData,
    config?: AxiosRequestConfig,
) => {
    const url = EXAMINATION_PATH.CREATE_EXAMINATION;

    const response = await bookingDoctorAxios.post<IExamination[]>(
        url,
        data,
        config,
    );

    return response.data;
};

export const getExaminationsAPI = async (config?: AxiosRequestConfig) => {
    const url = EXAMINATION_PATH.GET_EXAMINATIONS;

    const response = await bookingDoctorAxios.get<IExamination[]>(url, config);

    return response.data;
};

export const getExaminationAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(EXAMINATION_PATH.GET_EXAMINATION, {
        id,
    });

    const response = await bookingDoctorAxios.get<IExamination>(url, config);

    return response.data;
};
