import { queryClient } from '@/config/react-query';
import { getDoctorQuery } from '@/services/doctor/queries';
import { LoaderFunction } from 'react-router';

export const doctorDetailsPageLoader: LoaderFunction = async ({ params }) => {
    const { doctorId } = params;

    if (!doctorId) throw new Error('Doctor ID not found');

    queryClient.prefetchQuery(getDoctorQuery(Number(doctorId)));

    return true;
};
