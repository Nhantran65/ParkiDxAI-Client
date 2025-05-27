import { IAuthLoginData } from 'booking-doctor-js';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const useAuthLoginSchema = () => {
    const { t } = useTranslation(['bkd.user']);

    const schema: Yup.ObjectSchema<IAuthLoginData> = Yup.object({
        email: Yup.string().label(t('username')).required(),
        password: Yup.string().label(t('password')).required(),
    });

    return schema;
};

export default useAuthLoginSchema;
