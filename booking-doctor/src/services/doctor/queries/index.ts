import { queryOptions, skipToken } from '@tanstack/react-query';
import { getDoctorAPI, getDoctorsAPI, getPatientsAPI, IdType } from 'booking-doctor-js';
import { DoctorKeys } from './keys';

export const getDoctorsQuery = () => {
    return queryOptions({
        queryKey: [DoctorKeys.GetDoctorsQuery],
        queryFn: async () => {
            return await getDoctorsAPI();
        },
    });
};

export const getDoctorQuery = (id?: IdType) => {
    return queryOptions({
        queryKey: [DoctorKeys.GetDoctorsQuery, id],
        queryFn: id
            ? async () => {
                  return await getDoctorAPI(id);
              }
            : skipToken,
    });
};
