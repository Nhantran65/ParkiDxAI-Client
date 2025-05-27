import { Flex } from '1byte-react-design';
import styled from '@emotion/styled';

export const BannerStaticWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const CarouselFloatingContainerWrapper = styled(Flex)`
    position: absolute;
    width: 100%;
    bottom: 30%;
    left: 0;
    color: #fff !important;
`;

export const CarouselFloatingContent = styled.div`
    width: 1070px;
    height: 100%;
    display: flex;
    justify-content: center;
    top: 40%;
    transform: translateY(-50%);
    text-transform: uppercase;
`;
