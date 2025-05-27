import { queryClient } from '@/config/react-query';
import { useMutation } from '@tanstack/react-query';
import { createExaminationAPI, ICreateExaminationData } from 'booking-doctor-js';
import { ExaminationKeys } from '../queries/keys';

export const useCreateExaminationMutation = () =>
    useMutation({
        mutationFn: (data: ICreateExaminationData) => createExaminationAPI(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [ExaminationKeys.GetExaminationsQuery],
            });
        },
    });
