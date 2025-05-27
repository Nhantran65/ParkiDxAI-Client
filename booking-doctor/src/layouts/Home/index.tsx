import { ConfigProvider, DashboardTemplate, Flex, Layout, Typography } from '1byte-react-design';
import { Outlet } from 'react-router';
import HeaderContent from './components/HeaderContent';
import SiderMenu from './components/SiderMenu';

const HomeLayout = () => {
    console.debug('Loaded home layout');

    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        headerBg: '#fff',
                        colorBorderBg: '#ddd',
                    },
                },
            }}
        >
            <Layout>
                <Layout.Header>
                    <HeaderContent />,
                </Layout.Header>
                <Layout.Content>
                    <Outlet />
                </Layout.Content>
                <Layout.Footer>
                    <Flex justify="center">
                        <Typography.Text
                            style={{
                                color: '#fff',
                            }}
                        >
                            Copyright © 2025 ParkiDxAI. All rights reserved.
                        </Typography.Text>
                    </Flex>
                </Layout.Footer>
            </Layout>
        </ConfigProvider>
    );
};

export default HomeLayout;
