import { DashboardTemplate } from '1byte-react-design';
import { Outlet } from 'react-router';
import HeaderContent from './components/HeaderContent';
import SiderMenu from './components/SiderMenu';

const MainLayout = () => {
    console.debug('Loaded main layout');

    return (
        <DashboardTemplate
            headerProps={{
                fixedOnScroll: true,
                children: <HeaderContent />,
            }}
            siderProps={{
                fixedOnScroll: true,
                children: <SiderMenu />,
            }}
            footerProps={false}
        >
            <Outlet />
        </DashboardTemplate>
    );
};

export default MainLayout;
