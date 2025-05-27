import { IUpdateDoctorDecisionData } from 'booking-doctor-js';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const useUpdateDoctorDecisionSchema = () => {
    const { t } = useTranslation(['bkd.doctorDecision']);

    const schema: Yup.ObjectSchema<IUpdateDoctorDecisionData> = Yup.object({
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

export default useUpdateDoctorDecisionSchema;
