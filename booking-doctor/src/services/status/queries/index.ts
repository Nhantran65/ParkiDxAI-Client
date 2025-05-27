import { queryOptions, skipToken } from '@tanstack/react-query';
import { getStatusAPI, getStatusesAPI, IdType, IGetStatusesParams } from 'booking-doctor-js';
import { StatusKeys } from './keys';

export const getStatusesQuery = (params?: IGetStatusesParams) => {
    return queryOptions({
        queryKey: [StatusKeys.GetStatusesQuery, params],
        queryFn: async () => {
            return await getStatusesAPI(params);
        },
    });
};

export const getStatusQuery = (statusId?: IdType) => {
    return queryOptions({
        queryKey: [StatusKeys.GetStatusQuery, statusId],
        queryFn: statusId
            ? async () => {
                  return await getStatusAPI(statusId);
              }
            : skipToken,
    });
};
