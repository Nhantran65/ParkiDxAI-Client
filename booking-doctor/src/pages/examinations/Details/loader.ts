import { queryClient } from '@/config/react-query';
import { getExaminationQuery } from '@/services/examination/queries';
import { LoaderFunction } from 'react-router';

export const examinationDetailsPageLoader: LoaderFunction = async ({ params }) => {
    const { examinationId } = params;

    if (!examinationId) throw new Error('Examination ID not found');

    queryClient.prefetchQuery(getExaminationQuery(Number(examinationId)));

    return true;
};
