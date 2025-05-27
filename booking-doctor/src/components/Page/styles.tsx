import { Layout } from '1byte-react-design';
import isPropValid from '@emotion/is-prop-valid';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IPageProps } from './types';

export const PageWrapper = styled(Layout.Content, {
    shouldForwardProp: prop => isPropValid(prop),
})<Pick<IPageProps, 'isWidthLimit'>>`
    width: 100%;
    height: 100%;

    ${({ isWidthLimit }) =>
        isWidthLimit &&
        css`
            max-width: 1000px;
            margin: 0 auto;
        `}
`;
