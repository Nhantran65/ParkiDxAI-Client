import { queryClient } from '@/config/react-query';
import { useMutation } from '@tanstack/react-query';
import {
    createDoctorAPI,
    deleteDoctorAPI,
    ICreateDoctorData,
    IdType,
    updateDoctorAPI,
} from 'booking-doctor-js';
import { DoctorKeys } from '../queries/keys';
import { IUpdateDoctorMutationParams } from './types';

export const useDeleteDoctorMutation = () =>
    useMutation({
        mutationFn: (doctorId: IdType) => deleteDoctorAPI(doctorId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [DoctorKeys.GetDoctorsQuery],
            });
        },
    });

export const useCreateDoctorMutation = () =>
    useMutation({
        mutationFn: (data: ICreateDoctorData) => createDoctorAPI(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [DoctorKeys.GetDoctorsQuery],
            });
        },
    });

export const useUpdateDoctorMutation = () =>
    useMutation({
        mutationFn: ({ doctorId, data }: IUpdateDoctorMutationParams) =>
            updateDoctorAPI(doctorId, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [DoctorKeys.GetDoctorsQuery],
            });
        },
    });
