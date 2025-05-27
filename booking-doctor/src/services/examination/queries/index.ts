import { queryOptions, skipToken } from '@tanstack/react-query';
import { getExaminationAPI, getExaminationsAPI, IdType, IGetExaminationsParams } from 'booking-doctor-js';
import { ExaminationKeys } from './keys';

export const getExaminationsQuery = (params?: IGetExaminationsParams) => {
    return queryOptions({
        queryKey: [ExaminationKeys.GetExaminationsQuery, params],
        queryFn: async () => {
            return await getExaminationsAPI(params);
        },
    });
};

export const getExaminationQuery = (examinationId?: IdType) => {
    return queryOptions({
        queryKey: [ExaminationKeys.GetExaminationQuery, examinationId],
        queryFn: examinationId
            ? async () => {
                  return await getExaminationAPI(examinationId);
              }
            : skipToken,
    });
};
