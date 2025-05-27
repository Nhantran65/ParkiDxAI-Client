import { notification } from '1byte-react-design';
import i18n from '../i18next';

i18n.on('initialized', options => {
    // Ensure use after load i18n common.json
    notification.config({
        placement: 'topRight',
        defaultMessage: {
            error: i18n.t('error'),
            success: i18n.t('success'),
            info: i18n.t('info'),
            warning: i18n.t('warning'),
        },
        prefixCls: 'rd-notification',
    });
});
