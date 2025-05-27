import { Input } from '1byte-react-design';
import { globalToken } from '@/config/1byte-react-design';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SearchHeaderWrapper = styled.div`
    ${() => css`
        padding: ${globalToken.paddingSM}px ${globalToken.paddingLG}px;
        border: 1px solid ${globalToken.colorBorder};

        border-top-left-radius: ${globalToken.borderRadius}px;
        border-top-right-radius: ${globalToken.borderRadius}px;

        &:only-child {
            border-bottom-left-radius: ${globalToken.borderRadius}px;
            border-bottom-right-radius: ${globalToken.borderRadius}px;
        }
    `}
`;

export const InputSearchStyles = styled(Input.Search)`
    max-width: 400px;
`;
