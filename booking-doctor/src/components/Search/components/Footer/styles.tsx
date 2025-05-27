import { globalToken } from '@/config/1byte-react-design';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SearchFooterWrapper = styled.div`
    ${() => css`
        padding: ${globalToken.paddingSM}px ${globalToken.paddingLG}px;

        border: 1px solid ${globalToken.colorBorder};

        border-bottom-left-radius: ${globalToken.borderRadius}px;
        border-bottom-right-radius: ${globalToken.borderRadius}px;
        border-top: none;
    `}
`;
