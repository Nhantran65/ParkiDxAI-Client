import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { bookingDoctorAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { DOCTOR_DECISION_PATH } from './paths';
import {
    ICreateDoctorDecisionData,
    IGetDoctorDecisionsParams,
    IDoctorDecision,
    IUpdateDoctorDecisionData,
} from './types';

export const createDoctorDecisionAPI = async (
    data?: ICreateDoctorDecisionData,
    config?: AxiosRequestConfig,
) => {
    const url = DOCTOR_DECISION_PATH.CREATE_DOCTOR_DECISION;

    const response = await bookingDoctorAxios.post<IDoctorDecision>(
        url,
        data,
        config,
    );

    return response.data;
};

export const deleteDoctorDecisionAPI = async (
    deviceId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(DOCTOR_DECISION_PATH.DELETE_DOCTOR_DECISION, {
        id: deviceId,
    });

    return await bookingDoctorAxios.delete<HttpResponse<boolean>>(url, config);
};

export const getDoctorDecisionAPI = async (
    deviceId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(DOCTOR_DECISION_PATH.GET_DOCTOR_DECISION, {
        id: deviceId,
    });

    const response = await bookingDoctorAxios.get<IDoctorDecision>(url, config);

    return response.data;
};

export const getDoctorDecisionsAPI = async (
    params?: IGetDoctorDecisionsParams,
    config?: AxiosRequestConfig,
) => {
    const url = DOCTOR_DECISION_PATH.GET_DOCTOR_DECISIONS;

    const response = await bookingDoctorAxios.get<IDoctorDecision[]>(url, {
        params,
        ...config,
    });

    return response.data;
};

export const updateDoctorDecisionAPI = async (
    deviceId: IdType,
    data: IUpdateDoctorDecisionData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(DOCTOR_DECISION_PATH.UPDATE_DOCTOR_DECISION, {
        id: deviceId,
    });

    const response = await bookingDoctorAxios.put<IDoctorDecision>(
        url,
        data,
        config,
    );

    return response.data;
};

export const getDoctorDecisionByExamAPI = async (
    examinationId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(DOCTOR_DECISION_PATH.GET_DOCTOR_DECISION_BY_EXAMINATION_ID, {
        examinationId,
    });

    const response = await bookingDoctorAxios.get<IDoctorDecision>(url, config);

    return response.data;
};
