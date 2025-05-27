import { LoaderFunction } from 'react-router';
import { addAuthKeyForJFWJS, autoDetectToSignIn } from './helper';

/**
 * @description This will run first before the layout is rendered
 * @returns
 */
export const rootLayoutLoader: LoaderFunction = async ({ request }) => {
    const { url } = request;

    autoDetectToSignIn(url);
    addAuthKeyForJFWJS();

    return true;
};
