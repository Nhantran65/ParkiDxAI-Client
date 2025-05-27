import { queryClient } from '@/config/react-query';
import { getHospitalQuery } from '@/services/hospital/queries';
import { LoaderFunction } from 'react-router';

export const hospitalDetailsPageLoader: LoaderFunction = async ({ params }) => {
    const { hospitalId } = params;

    if (!hospitalId) throw new Error('Hospital ID not found');

    queryClient.prefetchQuery(getHospitalQuery(Number(hospitalId)));

    return true;
};
