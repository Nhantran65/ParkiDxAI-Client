import { Flex } from '1byte-react-design';
import { BrandLogoWrapper } from './BrandLogo.styles';
import { IBrandLogoProps } from './types';
import { Link } from 'react-router';
import { LOGO } from '@/models/constants/image';

const BrandLogo = (props: IBrandLogoProps) => {
    const { clickable = true, style } = props;

    if (clickable) {
        return (
            <Flex justify="center">
                <Link to={'/'}>
                    <BrandLogoWrapper
                        src={LOGO}
                        preview={false}
                        fallback="Brand logo"
                        style={style}
                    />
                </Link>
            </Flex>
        );
    }
    return (
        <Flex justify="center">
            <BrandLogoWrapper src={LOGO} preview={false} fallback="Brand logo" style={style} />
        </Flex>
    );
};

export default BrandLogo;
