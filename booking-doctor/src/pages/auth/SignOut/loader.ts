import { AUTH_TOKEN_KEY } from '@/models/constants/cookie';
import { PATHS } from '@/router/paths';
import { bookingDoctorJs } from 'booking-doctor-js';
import { Cookies } from 'react-cookie';
import { LoaderFunction, redirect } from 'react-router-dom';

export const signOutPageLoader: LoaderFunction = () => {
    const cookies = new Cookies();
    cookies.remove(AUTH_TOKEN_KEY, { path: '/' });

    bookingDoctorJs.clearAuthKey();
    return redirect(PATHS.AUTH.SIGN_IN);
};
