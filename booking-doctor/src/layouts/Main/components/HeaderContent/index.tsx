import { Flex, Space } from '1byte-react-design';
import BrandLogo from '@/components/jfw/BrandLogo';
import HeaderAvatar from './components/HeaderAvatar';
import HeaderNotification from './components/HeaderNotification';
import { HeaderContentWrapper } from './styles';

const HeaderContent = () => {
    return (
        <HeaderContentWrapper justify="space-between">
            <BrandLogo style={{ width: '100%', height: '46px' }} />
            <Space size="middle">
                <Flex>
                    <HeaderNotification />
                </Flex>

                <HeaderAvatar />
            </Space>
        </HeaderContentWrapper>
    );
};

export default HeaderContent;
