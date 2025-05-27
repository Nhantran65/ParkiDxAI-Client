import { AUTH_TOKEN_KEY } from '@/models/constants/cookie';
import { Cookies } from 'react-cookie';

export const checkIsAuthenticated = () => {
    const cookies = new Cookies();

    const authKey = cookies.get(AUTH_TOKEN_KEY);

    return Boolean(authKey);
};

export const getInitials = (name?: string) => {
    return name?.[0].toUpperCase();
};
