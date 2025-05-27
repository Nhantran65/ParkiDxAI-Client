import { notification } from '1byte-react-design';
import { InitOption } from '@jframework/jfw-js/dist/core/client/types';

export const globalErrorHandler: InitOption['globalErrorHandler'] = axiosError => {
    if (!axiosError?.config?.silent) {
        notification.error({
            description: 'Something went wrong.',
        });
    }

    throw axiosError;
};
