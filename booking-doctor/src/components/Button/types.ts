import { Button, ButtonProps, GetProps } from 'antd';
import { ComponentToken as ButtonComponentTokenAntd } from 'antd/es/button/style';
import { ButtonInternal } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { RdTooltipProps } from '1byte-react-design';

//#region Define Ant Design types
type ButtonPropsAntd = GetProps<typeof Button>;
type ButtonGroupPropsAntd = GetProps<typeof Button.Group>;
//#endregion

//#region Define extended component tokens
type ButtonComponentTokenExtend = {};
//#endregion

//#region Define extended types
/**
 * @description The color of the button extend.
 */
export type ColorButtonExtendProp = 'second' | 'tertiary' | 'quaternary' | 'success';

export type AlignButtonProp = 'left' | 'center' | 'right';

type ButtonPropsExtend = {
    /**
     * @description The color of the button.
     * @see ButtonProps#color
     */
    color?: ButtonPropsAntd['color'] | ColorButtonExtendProp;

    /**
     * 	If `true`, the button  will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;

    /**
     * Align content in the button.
     */
    align?: 'left' | 'center' | 'right';

    /**
     * Configuration for the tooltip displayed when hovering over the button.
     * @see string | RdTooltipProps for more details on available options.
     */
    tooltip?: string | RdTooltipProps;

    /**
     * 	If `true`, the button  will auto hide when the button is clicked.
     * @default true
     */
    hideTooltipWhenClick?: boolean;
};

type ButtonGroupPropsExtend = {};
//#endregion

//#region Export types
export type RdButtonProps = Omit<ButtonPropsAntd, 'color'> & ButtonPropsExtend;
export type RdButtonGroupProps = ButtonGroupPropsAntd & ButtonGroupPropsExtend;

export type RdButtonComponentToken = ButtonComponentTokenAntd & ButtonComponentTokenExtend;
//#endregion

//#region Define component types
export type RdButtonComponent = React.ForwardRefExoticComponent<
    RdButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
>;

export type RdButtonGroupComponent = React.FC<RdButtonGroupProps>;

export type RdButtonCompoundedComponent = typeof ButtonInternal & {
    Group: typeof ButtonGroup;
};

//#endregion
