import { globalToken } from '@/config/1byte-react-design';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SearchWrapper = styled.div`
    ${() => css`
        background-color: ${globalToken.colorBgLayout};
        border-radius: ${globalToken.borderRadius}px;
    `}
`;
