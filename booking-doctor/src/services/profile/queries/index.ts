import { queryOptions } from '@tanstack/react-query';
import { getProfileAPI } from 'booking-doctor-js';
import { ProfileKeys } from './keys';

export const getProfileQuery = () => {
    return queryOptions({
        queryKey: [ProfileKeys.GetProfileQuery],
        queryFn: async () => {
            return await getProfileAPI();
        },
    });
};
