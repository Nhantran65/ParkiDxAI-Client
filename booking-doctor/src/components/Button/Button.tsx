import { RdTooltipProps, Tooltip } from '1byte-react-design';
import clsx from 'clsx';
import { forwardRef, useMemo, useState } from 'react';
import { ButtonGroup } from './ButtonGroup';
import { ButtonStyles } from './styles';
import { RdButtonComponent, RdButtonCompoundedComponent, RdButtonProps } from './types';

export const ButtonInternal: RdButtonComponent = forwardRef((props, ref) => {
    const {
        rootClassName,
        tooltip,
        hideTooltipWhenClick = true,
        onClick,
        onMouseLeave,
        ...defaultProps
    } = props;
    const [isOpenTooltip, setIsOpenTooltip] = useState(false);

    const handleClickButton: RdButtonProps['onClick'] = event => {
        if (hideTooltipWhenClick) {
            setIsOpenTooltip(false);
        }

        if (onClick) {
            onClick(event);
        }
    };

    const handleMouseLeave: RdButtonProps['onMouseLeave'] = event => {
        if (onMouseLeave) {
            onMouseLeave(event);
        }
    };

    const RdButtonStyles = useMemo(() => {
        return (
            <ButtonStyles
                rootClassName={clsx('rd-button', rootClassName)}
                ref={ref}
                onMouseLeave={handleMouseLeave}
                onClick={handleClickButton}
                {...defaultProps}
            />
        );
    }, [defaultProps, rootClassName, handleClickButton, handleMouseLeave]);

    if (tooltip) {
        const tooltipProps: RdTooltipProps = hideTooltipWhenClick
            ? {
                  open: isOpenTooltip,
                  onOpenChange: visible => setIsOpenTooltip(visible),
              }
            : {};

        if (typeof tooltip === 'string') {
            return (
                <Tooltip {...tooltipProps} title={tooltip}>
                    {RdButtonStyles}
                </Tooltip>
            );
        }

        return (
            <Tooltip {...tooltipProps} {...tooltip}>
                {RdButtonStyles}
            </Tooltip>
        );
    }

    return RdButtonStyles;
});

export const Button = ButtonInternal as RdButtonCompoundedComponent;
Button.Group = ButtonGroup;
