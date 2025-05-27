import { RdItemType, RdMenuProps } from '1byte-react-design';
import { BRAND_LINK_TYPE } from '@jframework/jfw-js';

export interface IBrandLinkMenuProps extends Omit<RdMenuProps, 'items'> {
    type: BRAND_LINK_TYPE;
    groupType?: RdItemType['type'];
    prefixItems?: RdItemType[];
    suffixItems?: RdItemType[];
}
