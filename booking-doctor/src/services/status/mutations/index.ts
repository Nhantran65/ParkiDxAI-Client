import { queryClient } from '@/config/react-query';
import { useMutation } from '@tanstack/react-query';
import {
    createStatusAPI,
    deleteStatusAPI,
    ICreateStatusData,
    IdType,
    updateStatusAPI,
} from 'booking-doctor-js';
import { StatusKeys } from '../queries/keys';
import { IUpdateStatusMutationParams } from './types';

export const useDeleteStatusMutation = () =>
    useMutation({
        mutationFn: (statusId: IdType) => deleteStatusAPI(statusId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [StatusKeys.GetStatusesQuery],
            });
        },
    });

export const useCreateStatusMutation = () =>
    useMutation({
        mutationFn: (data: ICreateStatusData) => createStatusAPI(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [StatusKeys.GetStatusesQuery],
            });
        },
    });

export const useUpdateStatusMutation = () =>
    useMutation({
        mutationFn: ({ statusId, data }: IUpdateStatusMutationParams) =>
            updateStatusAPI(statusId, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [StatusKeys.GetStatusesQuery],
            });
        },
    });
