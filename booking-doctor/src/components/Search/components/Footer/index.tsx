import { Flex, Form, Select, Space, Tooltip, Typography } from '1byte-react-design';
import { InfoCircleFilled, LoadingOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { SearchFooterWrapper } from './styles';
import { ISearchFooterProps } from './types';

export const SearchFooter = <T extends Record<string, string>>(props: ISearchFooterProps<T>) => {
    const {
        fields,
        totalItems,
        showTotalItemsCount,
        tooltip,
        isLoading,
        filterValue,
        onChangeFilterValue,
    } = props;
    const { t } = useTranslation('common');

    return (
        <SearchFooterWrapper>
            <Flex justify="space-between">
                <Space>
                    {fields?.map(field => (
                        <Form.Item key={field.name as string} label={field.label} disableMargin>
                            <Select
                                options={field.options}
                                style={{
                                    width: '100px',
                                }}
                                defaultValue={filterValue?.[field.name]}
                                onChange={e => {
                                    onChangeFilterValue?.({
                                        ...filterValue,
                                        [field.name]: e,
                                    } as T);
                                }}
                            />
                        </Form.Item>
                    ))}
                </Space>
                {(totalItems !== undefined && showTotalItemsCount !== undefined) && (
                    <Space size={'small'} style={{ marginLeft: 'auto' }}>
                        {isLoading && <LoadingOutlined />}
                        <Typography.Text>
                            {t('showing', {
                                context: 'with_total',
                                total: totalItems,
                                count: showTotalItemsCount,
                            })}{' '}
                            {tooltip && (
                                <Tooltip title={tooltip}>
                                    <Typography.Text type="secondary">
                                        <InfoCircleFilled />
                                    </Typography.Text>
                                </Tooltip>
                            )}
                        </Typography.Text>
                    </Space>
                )}
            </Flex>
        </SearchFooterWrapper>
    );
};
