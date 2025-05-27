import { RdConfigProviderProps, Typography } from '1byte-react-design';

export const renderRequireMark: NonNullable<
    NonNullable<RdConfigProviderProps['form']>['requiredMark']
> = (labelNode, info) => {
    return (
        <Typography.Text>
            {labelNode} {info.required && <Typography.Text type="danger">*</Typography.Text>}
        </Typography.Text>
    );
};
