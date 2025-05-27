import { IUpdateStatusData } from 'booking-doctor-js';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const useUpdateStatusSchema = () => {
    const { t } = useTranslation(['bkd.status']);

    const schema: Yup.ObjectSchema<IUpdateStatusData> = Yup.object({
        name: Yup.string().label(t('name')).required(),
        description: Yup.string().label(t('description')).nullable(),
        address: Yup.string().label(t('address')).nullable(),
        phone: Yup.string().label(t('phone')).nullable(),
        email: Yup.string().email().label(t('email')).nullable(),
        website: Yup.string().url().label(t('website')).nullable(),
        established: Yup.string().label(t('established')).nullable(),
    });

    return schema;
};

export default useUpdateStatusSchema;
