import { queryClient } from '@/config/react-query';
import { useMutation } from '@tanstack/react-query';
import {
    createHospitalAPI,
    deleteHospitalAPI,
    ICreateHospitalData,
    IdType,
    updateHospitalAPI,
} from 'booking-doctor-js';
import { HospitalKeys } from '../queries/keys';
import { IUpdateHospitalMutationParams } from './types';

export const useDeleteHospitalMutation = () =>
    useMutation({
        mutationFn: (hospitalId: IdType) => deleteHospitalAPI(hospitalId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [HospitalKeys.GetHospitalsQuery],
            });
        },
    });

export const useCreateHospitalMutation = () =>
    useMutation({
        mutationFn: (data: ICreateHospitalData) => createHospitalAPI(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [HospitalKeys.GetHospitalsQuery],
            });
        },
    });

export const useUpdateHospitalMutation = () =>
    useMutation({
        mutationFn: ({ hospitalId, data }: IUpdateHospitalMutationParams) =>
            updateHospitalAPI(hospitalId, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [HospitalKeys.GetHospitalsQuery],
            });
        },
    });
