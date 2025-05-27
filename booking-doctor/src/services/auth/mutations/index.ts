import { queryClient } from '@/config/react-query';
import { ProfileKeys } from '@/services/profile/queries/keys';
import { useMutation } from '@tanstack/react-query';
import {
    authLoginAPI,
    authRegisterAPI,
    IAuthLoginData,
    IAuthRegisterData,
} from 'booking-doctor-js';

export const useAuthLoginMutation = () =>
    useMutation({
        mutationFn: (data: IAuthLoginData) => authLoginAPI(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [ProfileKeys.GetProfileQuery],
            });
        },
    });

export const useAuthRegisterMutation = () =>
    useMutation({
        mutationFn: (data: IAuthRegisterData) => authRegisterAPI(data),
    });
