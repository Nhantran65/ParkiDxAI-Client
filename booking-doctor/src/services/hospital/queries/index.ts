import { queryOptions, skipToken } from '@tanstack/react-query';
import { getHospitalAPI, getHospitalsAPI, IdType, IGetHospitalsParams } from 'booking-doctor-js';
import { HospitalKeys } from './keys';

export const getHospitalsQuery = (params?: IGetHospitalsParams) => {
    return queryOptions({
        queryKey: [HospitalKeys.GetHospitalsQuery, params],
        queryFn: async () => {
            return await getHospitalsAPI(params);
        },
    });
};

export const getHospitalQuery = (hospitalId?: IdType) => {
    return queryOptions({
        queryKey: [HospitalKeys.GetHospitalQuery, hospitalId],
        queryFn: hospitalId
            ? async () => {
                  return await getHospitalAPI(hospitalId);
              }
            : skipToken,
    });
};
