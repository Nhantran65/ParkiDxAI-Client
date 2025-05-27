import { queryOptions } from '@tanstack/react-query';
import { getPatientsAPI } from 'booking-doctor-js';
import { UserKeys } from './keys';

export const getPatientsQuery = () => {
    return queryOptions({
        queryKey: [UserKeys.GetPatientsQuery],
        queryFn: async () => {
            return await getPatientsAPI();
        },
    });
};
