import { Modal } from '1byte-react-design';
import i18n from '@/config/i18next';
import { AUTH_TOKEN_KEY } from '@/models/constants/cookie';
import { PATHS } from '@/router/paths';
import { bookingDoctorJs } from 'booking-doctor-js';
import { Cookies } from 'react-cookie';

/**
 * Auto sign in if have AUTH_TOKEN_KEY in searchParams
 * @see {AUTH_TOKEN_KEY}
 * */
export const autoDetectToSignIn = (url?: string) => {
    if (!url) return;

    const cookies = new Cookies();

    // Auto sign in if have AUTH_TOKEN_KEY in searchParams
    const urlObject = new URL(url);
    const searchParams = urlObject.searchParams;

    const authKeyInSearchParams = searchParams.get(AUTH_TOKEN_KEY);

    if (authKeyInSearchParams) {
        // Check if there is an existing signed-in account; if so, show a confirmation modal asking the user whether to automatically sign in with the new account
        const currentAuthKey = cookies.get(AUTH_TOKEN_KEY);

        if (currentAuthKey === authKeyInSearchParams) return;

        if (!currentAuthKey) {
            return cookies.set(AUTH_TOKEN_KEY, authKeyInSearchParams);
        }

        i18n.on('initialized', () => {
            Modal.confirm({
                title: i18n.t('detected_user.title', { ns: 'pages.common' }),
                content: i18n.t('detected_user.content', { ns: 'pages.common' }),
                onOk: () => {
                    cookies.set(AUTH_TOKEN_KEY, authKeyInSearchParams);

                    return (location.href = PATHS.SELF);
                },
            });
        });
    }
};

/**
 * Add authKey to jfw-js headers if exists
 * */
export const addAuthKeyForJFWJS = () => {
    const cookies = new Cookies();

    const authKey = cookies.get(AUTH_TOKEN_KEY);

    if (!authKey) return;

    bookingDoctorJs.changeAuthKey(authKey);
};
