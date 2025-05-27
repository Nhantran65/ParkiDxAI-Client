import { Avatar, Flex, Menu, RdItemType, Space, Typography } from '1byte-react-design';
import { getProfileQuery } from '@/services/profile/queries';
import { getInitials } from '@/services/profile/utils';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { HeaderAvatarPopoverWrapper } from './styles';
import Icon from '../../../SiderMenu/components/Icon';
import { LogoutGoogleSVG } from '@/components/icons';
import { Link } from 'react-router';
import { PATHS } from '@/router/paths';
import BrandLinkMenu from '@/components/jfw/BrandLinkMenu';

const HeaderAvatarPopover = () => {
    const { t } = useTranslation('bkd.user');
    const { data: userInfo } = useQuery({
        ...getProfileQuery(),
    });

    const suffixItems: RdItemType[] = [
        // {
        //     key: 'your_profile',
        //     icon: <Icon component={PersonGoogleSVG} />,
        //     label: <Link to={'#'}>{t('your_profile', { ns: 'pages.profile' })}</Link>,
        // },
        {
            key: 'sign_out',
            icon: <Icon component={LogoutGoogleSVG} />,
            label: <Link to={PATHS.AUTH.SIGN_OUT}>{t('sign_out')}</Link>,
        },
    ];

    return (
        <HeaderAvatarPopoverWrapper>
            <Space direction="vertical">
                <Space>
                    <Avatar style={{ backgroundColor: '#f56a00' }}>
                        {getInitials(userInfo?.email)}
                    </Avatar>
                    <Flex vertical>
                        <Typography.Text strong>{userInfo?.email}</Typography.Text>
                        <Typography.Text>
                            {userInfo?.first_name} {userInfo?.last_name}
                        </Typography.Text>
                    </Flex>
                </Space>
            </Space>

            <Menu
                items={suffixItems}
                mode="vertical"
                style={{
                    border: 'none',
                }}
            />
        </HeaderAvatarPopoverWrapper>
    );
};

export default HeaderAvatarPopover;
