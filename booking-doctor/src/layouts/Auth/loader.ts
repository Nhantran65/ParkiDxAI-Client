import { PATHS } from '@/router/paths';
import { checkIsAuthenticated } from '@/services/profile/utils';
import { LoaderFunction, redirect } from 'react-router';

export const authLayoutLoader: LoaderFunction = args => {
    console.debug('args', args.request);
    if (checkIsAuthenticated()) {
        return redirect(PATHS.ADMIN.DASHBOARD.SELF);
    }

    return true;
};
