import { queryOptions, skipToken } from '@tanstack/react-query';
import {
    getDoctorDecisionAPI,
    getDoctorDecisionByExamAPI,
    getDoctorDecisionsAPI,
    IdType,
    IGetDoctorDecisionsParams,
} from 'booking-doctor-js';
import { DoctorDecisionKeys } from './keys';

export const getDoctorDecisionsQuery = (params?: IGetDoctorDecisionsParams) => {
    return queryOptions({
        queryKey: [DoctorDecisionKeys.GetDoctorDecisionsQuery, params],
        queryFn: async () => {
            return await getDoctorDecisionsAPI(params);
        },
    });
};

export const getDoctorDecisionQuery = (doctorDecisionId?: IdType) => {
    return queryOptions({
        queryKey: [DoctorDecisionKeys.GetDoctorDecisionQuery, doctorDecisionId],
        queryFn: doctorDecisionId
            ? async () => {
                  return await getDoctorDecisionAPI(doctorDecisionId);
              }
            : skipToken,
    });
};

export const getDoctorDecisionByExamQuery = (doctorDecisionId?: IdType) => {
    return queryOptions({
        queryKey: [DoctorDecisionKeys.GetDoctorDecisionByExamQuery, doctorDecisionId],
        queryFn: doctorDecisionId
            ? async () => {
                  return await getDoctorDecisionByExamAPI(doctorDecisionId);
              }
            : skipToken,
    });
};
