import { queryClient } from '@/config/react-query';
import { getPatientQuery } from '@/services/patient/queries';
import { LoaderFunction } from 'react-router';

export const patientDetailsPageLoader: LoaderFunction = async ({ params }) => {
    const { patientId } = params;

    if (!patientId) throw new Error('Patient ID not found');

    queryClient.prefetchQuery(getPatientQuery(Number(patientId)));

    return true;
};
