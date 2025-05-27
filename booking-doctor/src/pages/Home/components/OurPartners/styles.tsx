import { Carousel } from '1byte-react-design';
import styled from '@emotion/styled';

export const OurPartnersWrapper = styled.div`
    width: 1070px;
    height: 300px;
`;

export const CarouselStyled = styled(Carousel)`
    height: 100px;

    .slick-track {
        display: flex;
        align-items: center;
    }

    .ant-image {
        width: 100%;
    }

    .ant-image-img {
        object-fit: contain;
    }
`;
