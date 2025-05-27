import { Button, Col, Image, Row, Space, Typography } from '1byte-react-design';
import { HomeHealthGoogleSVG, SchoolGoogleSVG, StethoscopeGoogleSVG } from '@/components/icons';
import { globalToken } from '@/config/1byte-react-design';
import { EMPTY_IMAGE } from '@/models/constants/image';
import Icon from '@ant-design/icons';
import { DoctorWrapper } from './styles';
import { IDoctorProps } from './types';
import { generatePath, Link } from 'react-router';
import { PATHS } from '@/router/paths';

const Doctor = (props: IDoctorProps) => {
    const { doctor } = props;

    return (
        <DoctorWrapper>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Space direction="vertical">
                        <Image
                            src={doctor.profile_picture}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 6,
                            }}
                            fallback={EMPTY_IMAGE}
                        />
                    </Space>
                </Col>
                <Col span={12}>
                    <Space direction="vertical" size="small">
                        <Link
                            to={generatePath(PATHS.PROFESSIONALS.DETAILS, {
                                professionalId: doctor.id,
                            })}
                        >
                            <Typography.Title level={4}>{`${doctor.first_name || ''} ${
                                doctor.last_name || ''
                            }`}</Typography.Title>
                        </Link>
                        <Space align="start">
                            <Icon
                                component={SchoolGoogleSVG}
                                style={{
                                    color: globalToken.colorPrimary,
                                    fontSize: 24,
                                }}
                            />
                            <Typography.Text>{doctor.education || 'unknown'}</Typography.Text>
                        </Space>
                        <Space align="start">
                            <Icon
                                component={StethoscopeGoogleSVG}
                                style={{
                                    color: globalToken.colorPrimary,
                                    fontSize: 24,
                                }}
                            />

                            <Typography.Text>{doctor.specialties || 'unknown'}</Typography.Text>
                        </Space>
                        <Space align="start">
                            <Icon
                                component={HomeHealthGoogleSVG}
                                style={{
                                    color: globalToken.colorPrimary,
                                    fontSize: 24,
                                }}
                            />

                            <Typography.Text>{doctor.hospital_name || 'unknown'}</Typography.Text>
                        </Space>
                    </Space>
                </Col>
            </Row>
        </DoctorWrapper>
    );
};

export default Doctor;
