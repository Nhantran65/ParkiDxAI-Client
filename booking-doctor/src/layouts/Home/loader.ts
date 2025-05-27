import { queryClient } from '@/config/react-query';
import { PATHS } from '@/router/paths';
import { getProfileQuery } from '@/services/profile/queries';
import { checkIsAuthenticated } from '@/services/profile/utils';
import { redirect } from 'react-router';

export const homeLayoutLoader = async () => {
    console.debug('Home loader');
    // Redirect in sign in page if user is not authenticated
    if (!checkIsAuthenticated()) {
        // throw a redirect to stop executing code here and redirect to sign in page.
        throw redirect(PATHS.AUTH.SIGN_IN);
    }

    try {
        await queryClient.fetchQuery(getProfileQuery());
    } catch (err) {
        return redirect(PATHS.AUTH.SIGN_OUT);
    }

    return null;
};
