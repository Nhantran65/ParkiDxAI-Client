import { RdImageProps } from '1byte-react-design';
import { BRAND_LINK_TYPE } from '@jframework/jfw-js';

export interface IBrandFaviconProps extends RdImageProps {
    clickable?: boolean;
    brandLinkType?: Extract<
        BRAND_LINK_TYPE,
        BRAND_LINK_TYPE.HEADER_CUSTOM_LOGO | BRAND_LINK_TYPE.FOOTER_LOGO
    >;
}
