import { ICreateDoctorData, IUpdateDoctorData, IUpdateUserData, UserRole } from 'booking-doctor-js';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const useCreateDoctorSchema = () => {
    const { t } = useTranslation(['bkd.doctor', 'bkd.user']);

    const schema: Yup.ObjectSchema<ICreateDoctorData> = Yup.object({
        first_name: Yup.string()
            .label(t('first_name', { ns: 'bkd.user' }))
            .required(),
        last_name: Yup.string()
            .label(t('last_name', { ns: 'bkd.user' }))
            .required(),
        email: Yup.string()
            .email()
            .label(t('email', { ns: 'bkd.user' }))
            .required(),
        password: Yup.string()
            .label(t('password', { ns: 'bkd.user' }))
            .required(),

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

export default useCreateDoctorSchema;
