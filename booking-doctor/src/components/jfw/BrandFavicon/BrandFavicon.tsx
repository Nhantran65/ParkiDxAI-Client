import { Flex } from '1byte-react-design';
import { BrandFaviconWrapper } from './styles';
import { IBrandFaviconProps } from './types';

const BrandFavicon = (props: IBrandFaviconProps) => {
    const { clickable = true, brandLinkType, ...imageProps } = props;
    return (
        <BrandFaviconWrapper
            src={'https://d2fltix0v2e0sb.cloudfront.net/dev-black.png'}
            preview={false}
            fallback="Brand logo"
            {...imageProps}
            width={36}
            height={36}
        />
    );
};

export default BrandFavicon;
