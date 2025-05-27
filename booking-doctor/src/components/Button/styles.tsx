import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { RdButtonComponent, RdButtonGroupProps, RdButtonProps } from './types';
import { getComponentOrGlobalToken, getExcludeForwardProps } from '1byte-react-design';

export const ButtonStyles = styled(Button as RdButtonComponent, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdButtonProps>(['fullWidth'] as (keyof RdButtonProps)[], prop),
})<RdButtonProps>`
    ${({ fullWidth }) => fullWidth && fullWidthCSS}

    ${({ color }) => {
        switch (color) {
            case 'second':
                return css``;
            case 'tertiary':
                return css``;
            case 'quaternary':
                return css``;
            case 'success':
                return css`
                    &.ant-btn {
                        color: ${getComponentOrGlobalToken('Button', 'colorSuccess')};
                    }
                `;
            default:
                return color;
        }
    }}

     ${({ align }) => {
        switch (align) {
            case 'left':
                return css`
                    justify-content: flex-start;
                `;
            case 'center':
                return css`
                    justify-content: center;
                `;
            case 'right':
                return css`
                    justify-content: flex-end;
                `;
            default:
                return null;
        }
    }}
`;
export const ButtonGroupStyles = styled(Button.Group)<RdButtonGroupProps>``;

const fullWidthCSS = css`
    &.rd-button {
        width: 100%;
    }
`;
