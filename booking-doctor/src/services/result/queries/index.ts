import { queryOptions, skipToken } from '@tanstack/react-query';
import {
    generateLimeResultAPI,
    getHospitalsAPI,
    IdType,
    IGetHospitalsParams,
} from 'booking-doctor-js';
import { HospitalKeys } from './keys';

export const generateLimeResultQuery = (examinationId?: IdType) => {
    return queryOptions({
        queryKey: [HospitalKeys.GenerateLimeResultQuery, examinationId],
        queryFn: examinationId
            ? async () => {
                  return await generateLimeResultAPI(examinationId);
              }
            : skipToken,
    });
};
