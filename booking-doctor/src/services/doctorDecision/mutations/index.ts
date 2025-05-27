import { queryClient } from '@/config/react-query';
import { useMutation } from '@tanstack/react-query';
import {
    createDoctorDecisionAPI,
    deleteDoctorDecisionAPI,
    ICreateDoctorDecisionData,
    IdType,
    updateDoctorDecisionAPI,
} from 'booking-doctor-js';
import { DoctorDecisionKeys } from '../queries/keys';
import { IUpdateDoctorDecisionMutationParams } from './types';
import { ExaminationKeys } from '@/services/examination/queries/keys';

export const useDeleteDoctorDecisionMutation = () =>
    useMutation({
        mutationFn: (doctorDecisionId: IdType) => deleteDoctorDecisionAPI(doctorDecisionId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [DoctorDecisionKeys.GetDoctorDecisionsQuery],
            });
        },
    });

export const useCreateDoctorDecisionMutation = () =>
    useMutation({
        mutationFn: (data: ICreateDoctorDecisionData) => createDoctorDecisionAPI(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [DoctorDecisionKeys.GetDoctorDecisionsQuery],
            });
            queryClient.invalidateQueries({
                queryKey: [ExaminationKeys.GetExaminationQuery],
            });
        },
    });

export const useUpdateDoctorDecisionMutation = () =>
    useMutation({
        mutationFn: ({ doctorDecisionId, data }: IUpdateDoctorDecisionMutationParams) =>
            updateDoctorDecisionAPI(doctorDecisionId, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [DoctorDecisionKeys.GetDoctorDecisionsQuery],
            });
        },
    });
