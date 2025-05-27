import { Card } from '1byte-react-design';
import styled from '@emotion/styled';

export const BannerCardStaticWrapper = styled(Card)`
    width: 786px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    .ant-card-body {
        padding: 12px 16px;
    }
`;
