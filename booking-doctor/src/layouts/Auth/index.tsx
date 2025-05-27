import { Space } from '1byte-react-design';
import BrandLogo from '@/components/jfw/BrandLogo';
import { Outlet } from 'react-router';
import Version from './components/Version';
import { AuthLayoutWrapper } from './styles';

const AuthLayout = () => {
    return (
        <AuthLayoutWrapper>
            <Space size="middle" direction="vertical" block>
                <BrandLogo />
                <Outlet />
            </Space>
            <Version />
        </AuthLayoutWrapper>
    );
};

export default AuthLayout;
