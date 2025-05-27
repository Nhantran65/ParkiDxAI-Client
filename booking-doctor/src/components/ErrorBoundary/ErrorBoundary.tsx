import { Button, Space, Typography } from '1byte-react-design';
import { Result } from 'antd';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router';

const ErrorBoundary = () => {
    const error = useRouteError();

    console.debug('error boundary', error);

    if (isRouteErrorResponse(error)) {
        // the response json is automatically parsed to
        // `error.data`, you also have access to the status
        return (
            <Space direction="vertical" size={'small'}>
                <Typography.Title level={1} disableMargin>
                    {error.status}
                </Typography.Title>
                <Typography.Title level={2} disableMargin>
                    {error.data}
                </Typography.Title>
            </Space>
        );
    }

    // rethrow to let the parent error boundary handle it
    // when it's not a special case for this route
    return (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={
                <Link to="/">
                    <Button type="primary">Back Home</Button>
                </Link>
            }
        />
    );
};

export default ErrorBoundary;
