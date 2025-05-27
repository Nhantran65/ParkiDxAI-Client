import { getExcludeForwardProps, Spin } from '1byte-react-design';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IFallbackLoadingProps } from './types';

export const FallbackLoadingWrapper = styled(Spin, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<IFallbackLoadingProps>(
            ['isCenter'] as (keyof IFallbackLoadingProps)[],
            prop
        ),
})<Pick<IFallbackLoadingProps, 'isCenter'>>`
    ${({ isCenter }) =>
        isCenter &&
        css`
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        `}
`;
