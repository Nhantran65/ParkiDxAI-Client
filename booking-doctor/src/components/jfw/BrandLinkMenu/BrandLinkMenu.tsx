import { RdItemType, Typography } from '1byte-react-design';
import { IBrandLink } from '@jframework/jfw-js';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BrandLinkMenuWrapper } from './BrandLinkMenu.styles';
import { IBrandLinkMenuProps } from './BrandLinkMenu.types';
import { brandLinkByTypeQuery } from '@/services/brand/queries/brandLink';

export const BrandLinkMenu = (props: IBrandLinkMenuProps) => {
    const { type, groupType = 'submenu', prefixItems = [], suffixItems = [], ...menuProps } = props;
    const { data: brandLinks } = useQuery({
        ...brandLinkByTypeQuery(type),
        select: response => response?.data,
    });

    const transformBrandLinks = (brandLinks: IBrandLink[]): RdItemType[] => {
        return brandLinks.map(brandLink => {
            if (brandLink.items.length) {
                return {
                    type: groupType,
                    label: (
                        <>
                            {brandLink?.link ? (
                                <Typography.Link>
                                    <Link to={brandLink.link || ''}>{brandLink.name}</Link>
                                </Typography.Link>
                            ) : (
                                // <Typography.Title disableMargin level={4}>
                                brandLink.name || 'Untitled item'
                                // </Typography.Title>
                            )}
                        </>
                    ),
                    key: brandLink.id,
                    children: brandLink.items ? transformBrandLinks(brandLink.items) : [],
                } as RdItemType;
            }

            return {
                type: 'item',
                key: brandLink.id,
                label: (
                    <>
                        {brandLink?.link ? (
                            <Link to={brandLink.link || ''}>
                                <Typography.Link>{brandLink.name} </Typography.Link>
                            </Link>
                        ) : (
                            brandLink.name
                        )}
                    </>
                ),
            } as RdItemType;
        });
    };

    const brandLinkMenuItems = useMemo(() => {
        const menuItems = transformBrandLinks(brandLinks || []);

        if (prefixItems) {
            menuItems.unshift(...prefixItems);
        }

        if (prefixItems) {
            menuItems.push(...suffixItems);
        }

        return menuItems;
    }, [brandLinks, prefixItems, suffixItems, transformBrandLinks]);

    return <BrandLinkMenuWrapper items={brandLinkMenuItems} {...menuProps}></BrandLinkMenuWrapper>;
};
