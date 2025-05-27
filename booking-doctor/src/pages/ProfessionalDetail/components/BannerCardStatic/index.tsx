import { Col, Flex, Row, Space, Typography } from '1byte-react-design';
import { DiagnosisGoogleSVG, PhoneEnabledGoogleSVG } from '@/components/icons';
import { globalToken } from '@/config/1byte-react-design';
import Icon, { UserOutlined } from '@ant-design/icons';
import { BannerCardStaticWrapper } from './styles';

const BannerCardStatic = () => {
    return (
        <BannerCardStaticWrapper>
            <Row>
                <Col span={8}>
                    <Flex justify="center">
                        <Space size="small" align="start">
                            <Icon
                                component={PhoneEnabledGoogleSVG}
                                style={{
                                    color: globalToken.colorPrimary,
                                    fontSize: 24,
                                }}
                            />
                            <Typography.Text
                                style={{
                                    color: globalToken.colorPrimary,
                                }}
                            >
                                Consult
                            </Typography.Text>
                        </Space>
                    </Flex>
                </Col>
                <Col span={8}>
                    <Flex justify="center">
                        <Space size="small" align="start">
                            <Icon
                                component={DiagnosisGoogleSVG}
                                style={{
                                    color: globalToken.colorPrimary,
                                    fontSize: 24,
                                }}
                            />
                            <Typography.Text
                                style={{
                                    color: globalToken.colorPrimary,
                                }}
                            >
                                Diagnosis
                            </Typography.Text>
                        </Space>
                    </Flex>
                </Col>
                <Col span={8}>
                    <Flex justify="center">
                        <Space size="small" align="start">
                            <UserOutlined
                                style={{ fontSize: 24, color: globalToken.colorPrimary }}
                            />
                            <Typography.Text
                                style={{
                                    color: globalToken.colorPrimary,
                                }}
                            >
                                Find a Doctor
                            </Typography.Text>
                        </Space>
                    </Flex>
                </Col>
            </Row>
        </BannerCardStaticWrapper>
    );
};

export default BannerCardStatic;
