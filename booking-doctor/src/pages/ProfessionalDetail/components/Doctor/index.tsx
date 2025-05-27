import { Button, Col, Image, Row, Space, Typography } from '1byte-react-design';
import { HomeHealthGoogleSVG, SchoolGoogleSVG, StethoscopeGoogleSVG } from '@/components/icons';
import { globalToken } from '@/config/1byte-react-design';
import Icon from '@ant-design/icons';
import { DoctorWrapper } from './styles';
import { IDoctorProps } from './types';

const Doctor = (props: IDoctorProps) => {
    const { name, education, specialties, hospitals, avatar } = props;

    return (
        <DoctorWrapper>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Space direction="vertical">
                        <Image
                            src={avatar}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 6,
                            }}
                        />

                        <Button type="primary" block>
                            Booking
                        </Button>
                    </Space>
                </Col>
                <Col span={12}>
                    <Space direction="vertical" size="small">
                        <Typography.Title level={4}>{name}</Typography.Title>
                        <Space align="start">
                            <Icon
                                component={SchoolGoogleSVG}
                                style={{
                                    color: globalToken.colorPrimary,
                                    fontSize: 24,
                                }}
                            />
                            <Typography.Text>{education}</Typography.Text>
                        </Space>
                        <Space align="start">
                            <Icon
                                component={StethoscopeGoogleSVG}
                                style={{
                                    color: globalToken.colorPrimary,
                                    fontSize: 24,
                                }}
                            />

                            <Typography.Text>{specialties}</Typography.Text>
                        </Space>
                        <Space align="start">
                            <Icon
                                component={HomeHealthGoogleSVG}
                                style={{
                                    color: globalToken.colorPrimary,
                                    fontSize: 24,
                                }}
                            />

                            <Typography.Text>{hospitals}</Typography.Text>
                        </Space>
                    </Space>
                </Col>
            </Row>
        </DoctorWrapper>
    );
};

export default Doctor;
