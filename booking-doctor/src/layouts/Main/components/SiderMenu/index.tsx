import { MenuItemType, SubMenuType } from 'antd/es/menu/interface';
import { useMemo } from 'react';
import { useLocation, useMatches } from 'react-router';
import { useGetSiderAdminMenuItems } from './hooks/useGetSiderAdminMenuItems';
import { SiderMenuWrapper } from './styles';

const SiderMenu = () => {
    const location = useLocation();
    const matches = useMatches();

    const siderAdminMenuItems = useGetSiderAdminMenuItems();

    const openKeys = useMemo(() => {
        if (!siderAdminMenuItems?.find(item => item?.key === location.pathname)) {
            const currentSubItem = siderAdminMenuItems?.find(item =>
                (item as SubMenuType<MenuItemType>)?.children?.find(
                    item => item?.key === location.pathname
                )
            );
            if (currentSubItem) return [currentSubItem.key?.toString() || ''];
        }
        return [];
    }, [siderAdminMenuItems, location.pathname]);

    // Will use in feature
    const selectedKeys = useMemo(() => {
        return matches.map(match => match.pathname);
    }, [matches]);

    return (
        <SiderMenuWrapper
            theme="light"
            selectedKeys={[location.pathname]}
            defaultOpenKeys={openKeys}
            mode="inline"
            items={siderAdminMenuItems}
        />
    );
};

export default SiderMenu;
