import { queryClient } from '@/config/react-query';
import { DoctorKeys } from '@/services/doctor/queries/keys';
import { useMutation } from '@tanstack/react-query';
import {
    createUserAPI,
    deleteUserAPI,
    ICreateUserData,
    IdType,
    updateUserAPI,
} from 'booking-doctor-js';
import { UserKeys } from '../queries/keys';
import { IUpdateUserMutationParams } from './types';

export const useDeleteUserMutation = () =>
    useMutation({
        mutationFn: (userId: IdType) => deleteUserAPI(userId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [UserKeys.GetPatientsQuery],
            });
            queryClient.invalidateQueries({
                queryKey: [DoctorKeys.GetDoctorsQuery],
            });
        },
    });

export const useCreateUserMutation = () =>
    useMutation({
        mutationFn: (data: ICreateUserData) => createUserAPI(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [UserKeys.GetPatientsQuery],
            });
            queryClient.invalidateQueries({
                queryKey: [DoctorKeys.GetDoctorsQuery],
            });
        },
    });

export const useUpdateUserMutation = () =>
    useMutation({
        mutationFn: ({ userId, data }: IUpdateUserMutationParams) => updateUserAPI(userId, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [UserKeys.GetPatientsQuery],
            });
            queryClient.invalidateQueries({
                queryKey: [DoctorKeys.GetDoctorsQuery],
            });
        },
    });
