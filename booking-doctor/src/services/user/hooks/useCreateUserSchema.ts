import { ICreateUserData, IUpdateUserData, UserRole } from 'booking-doctor-js';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const useCreateUserSchema = () => {
    const { t } = useTranslation(['bkd.user']);

    const schema: Yup.ObjectSchema<ICreateUserData> = Yup.object({
        first_name: Yup.string().label(t('first_name')).nullable(),
        last_name: Yup.string().label(t('last_name')).nullable(),
        email: Yup.string().email().label(t('email')).required(),
        password: Yup.string().label(t('password')).required(),
        profile_picture: Yup.string().label(t('profile_picture')).nullable(),
        role: Yup.mixed<IUpdateUserData['role']>()
            .oneOf(Object.values(UserRole))
            .label(t('role'))
            .required(),
    });

    return schema;
};

export default useCreateUserSchema;
