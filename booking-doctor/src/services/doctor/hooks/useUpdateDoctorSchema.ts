import { IUpdateDoctorData } from 'booking-doctor-js';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const useUpdateDoctorSchema = () => {
    const { t } = useTranslation(['bkd.doctor']);

    const schema: Yup.ObjectSchema<IUpdateDoctorData> = Yup.object({
        user_id: Yup.number().label(t('user_id')).required(),
        hospital_id: Yup.number().label(t('hospital_id')).nullable(),
        title: Yup.string().label(t('title')).nullable(),
        specialties: Yup.string().label(t('specialties')).nullable(),
        education: Yup.string().label(t('education')).nullable(),
        experience: Yup.string().label(t('experience')).nullable(),
        member_of: Yup.string().label(t('member_of')).nullable(),
        publications: Yup.string().label(t('publications')).nullable(),
        profile_picture: Yup.string().label(t('profile_picture')).nullable(),
        bio: Yup.string().label(t('bio')).nullable(),
    });

    return schema;
};

export default useUpdateDoctorSchema;
