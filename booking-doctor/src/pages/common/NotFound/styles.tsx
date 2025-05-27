import { Layout } from '1byte-react-design';
import Page from '@/components/Page';
import { globalToken } from '@/config/1byte-react-design';
import styled from '@emotion/styled';

export const NotFoundLayout = styled(Layout)`
    height: 100vh;
    background: ${globalToken.colorPrimaryBg};
    justify-content: center;
    align-items: center;
`;

export const NotFoundWrapper = styled(Page)``;
