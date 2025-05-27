import { AxiosRequestConfig } from 'axios';
import { bookingDoctorAxios } from '../../core/client/client';
import { IdType } from '../base';
import { HOSPITAL_PATH } from './paths';
import { LimeResponse } from './types';
import { generatePath } from '../../utils/path';

export const generateLimeResultAPI = async (
    examinationId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(HOSPITAL_PATH.GENERATE_LIME_RESULT, {
        examinationId,
    });
    const response = await bookingDoctorAxios.post<LimeResponse>(url, config);

    return response.data;
};
