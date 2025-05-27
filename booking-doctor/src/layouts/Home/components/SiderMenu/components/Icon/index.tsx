import { globalToken } from '@/config/1byte-react-design';
import IconAntd from '@ant-design/icons';
import { IconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { ForwardRefExoticComponent, RefAttributes, forwardRef } from 'react';

const Icon: ForwardRefExoticComponent<
    Omit<IconComponentProps, 'ref'> & RefAttributes<HTMLSpanElement>
> = forwardRef((props, ref) => (
    <IconAntd
        style={{
            color: globalToken.colorTextDescription,
        }}
        {...props}
        ref={ref}
    />
));

export default Icon;
