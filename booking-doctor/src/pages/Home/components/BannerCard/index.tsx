import { Col, Row, Space, Typography } from '1byte-react-design';
import { DiagnosisGoogleSVG, PhoneEnabledGoogleSVG } from '@/components/icons';
import { globalToken } from '@/config/1byte-react-design';
import Icon, { UserOutlined } from '@ant-design/icons';
import { BannerCardWrapper } from './styles';

const BannerCard = () => {
    return (
        <BannerCardWrapper>
            <Row>
                <Col span={8}>
                    <Space size="small" align="start">
                        <Icon
                            component={PhoneEnabledGoogleSVG}
                            style={{
                                color: globalToken.colorPrimary,
                                fontSize: 32,
                            }}
                        />
                        <Space size="small" direction="vertical">
                            <Typography.Title disableMargin level={4}>
                                Consult
                            </Typography.Title>
                            <Typography.Text>Get consulted by our professionals</Typography.Text>
                        </Space>
                    </Space>
                </Col>
                <Col span={8}>
                    <Space size="small" align="start">
                        <Icon
                            component={DiagnosisGoogleSVG}
                            style={{
                                color: globalToken.colorPrimary,
                                fontSize: 32,
                            }}
                        />
                        <Space size="small" direction="vertical">
                            <Typography.Title disableMargin level={4}>
                                Diagnosis
                            </Typography.Title>
                            <Typography.Text>Make a diagnosis with ParkiDxAI</Typography.Text>
                        </Space>
                    </Space>
                </Col>
                <Col span={8}>
                    <Space size="small" align="start">
                        <UserOutlined style={{ fontSize: 32, color: globalToken.colorPrimary }} />
                        <Space size="small" direction="vertical">
                            <Typography.Title disableMargin level={4}>
                                Find a Doctor
                            </Typography.Title>
                            <Typography.Text>Professionals directory</Typography.Text>
                        </Space>
                    </Space>
                </Col>
            </Row>
        </BannerCardWrapper>
    );
};

export default BannerCard;
