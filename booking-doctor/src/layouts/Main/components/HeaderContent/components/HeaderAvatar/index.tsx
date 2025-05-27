import { Avatar, Button } from '1byte-react-design';
import { getProfileQuery } from '@/services/profile/queries';
import { getInitials } from '@/services/profile/utils';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import HeaderAvatarPopover from './HeaderAvatarPopover';
import { HeaderAvatarWrapper } from './styles';

const HeaderAvatar = () => {
    const { t } = useTranslation(['bkd.user', 'pages.profile']);
    const { data: userInfo } = useQuery({
        ...getProfileQuery(),
    });

    return (
        <HeaderAvatarWrapper
            placement="bottomRight"
            content={<HeaderAvatarPopover />}
            trigger="click"
        >
            <Button shape="circle" type="text" tooltip={t('your_profile', { ns: 'pages.profile' })}>
                <Avatar size={'small'} style={{ backgroundColor: '#f56a00' }}>
                    {getInitials(userInfo?.email)}
                </Avatar>
            </Button>
        </HeaderAvatarWrapper>
    );
};

export default HeaderAvatar;
