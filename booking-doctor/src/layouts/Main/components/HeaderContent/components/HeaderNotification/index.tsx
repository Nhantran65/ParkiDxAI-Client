import { Badge, Button } from '1byte-react-design';
import { NotificationsGoogleSVG } from '@/components/icons';
import Icon from '@ant-design/icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderNotificationPopover from './HeaderNotificationPopover';
import { HeaderNotificationWrapper } from './styles';

const HeaderNotification = () => {
    const { t } = useTranslation(['jfw.notification']);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
    };

    return (
        <HeaderNotificationWrapper
            open={isOpen}
            onOpenChange={handleOpenChange}
            content={<HeaderNotificationPopover />}
            placement="bottomRight"
            trigger="click"
        >
            <Button
                shape="circle"
                type="text"
                tooltip={t('notification_other')}
                hideTooltipWhenClick
            >
                <Badge count={21} size="small" offset={[3, 3]} overflowCount={9}>
                    <Icon
                        style={{
                            fontSize: 24,
                            color: '#fff',
                        }}
                        component={NotificationsGoogleSVG}
                    />
                </Badge>
            </Button>
        </HeaderNotificationWrapper>
    );
};

export default HeaderNotification;
