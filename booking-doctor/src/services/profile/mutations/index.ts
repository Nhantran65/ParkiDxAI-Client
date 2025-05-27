import { queryClient } from '@/config/react-query';
import { useMutation } from '@tanstack/react-query';
import { updateProfileAPI } from 'booking-doctor-js';
import { ProfileKeys } from '../queries/keys';
import { IUpdateProfileMutationParams } from './types';

export const useUpdateProfileMutation = () =>
    useMutation({
        mutationFn: ({ profileId, data }: IUpdateProfileMutationParams) =>
            updateProfileAPI(profileId, data),
        onSuccess: (_, variable) => {
            queryClient.invalidateQueries({
                queryKey: [ProfileKeys.GetProfileQuery, variable.profileId],
            });
        },
    });
