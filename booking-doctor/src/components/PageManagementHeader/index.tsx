import { Flex, Space, Typography } from '1byte-react-design';
import { PageManagementHeaderWrapper } from './styles';
import { IPageManagementHeaderProps } from './types';

const PageManagementHeader = (props: IPageManagementHeaderProps) => {
    const { title, actions } = props;

    return (
        <PageManagementHeaderWrapper>
            <Flex justify="space-between">
                <Space size={0}>
                    <Typography.Title level={2} disableMargin>
                        {title}
                    </Typography.Title>
                </Space>

                {actions}
            </Flex>
        </PageManagementHeaderWrapper>
    );
};

export default PageManagementHeader;
