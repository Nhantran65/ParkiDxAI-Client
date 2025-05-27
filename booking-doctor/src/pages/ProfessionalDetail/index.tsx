import {
    Breadcrumb,
    Card,
    Col,
    Collapse,
    Flex,
    Image,
    Row,
    Space,
    Typography,
} from '1byte-react-design';
import SafeHTML from '@/components/SafeHTML';
import { globalToken } from '@/config/1byte-react-design';
import { EMPTY_IMAGE } from '@/models/constants/image';
import { getDoctorQuery } from '@/services/doctor/queries';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { ProfessionalDetailWrapper } from './styles';

const ProfessionalDetails = () => {
    const { t } = useTranslation(['pages.professional_details', 'bkd.user']);
    const { professionalId } = useParams<{ professionalId: string }>();
    const { data: doctor, isPending } = useQuery(getDoctorQuery(Number(professionalId)));

    return (
        <Flex justify="center">
            <div style={{ width: '1070px', minHeight: '100vh', marginTop: 40, marginBottom: 40 }}>
                <ProfessionalDetailWrapper isWidthLimit={false} title={t('page_meta_title')}>
                    <Space direction="vertical" block>
                        <Breadcrumb
                            items={[
                                {
                                    title: 'Home',
                                    href: '/',
                                },
                                {
                                    title: 'Professionals',
                                },
                                {
                                    title: `${doctor?.first_name || ''} ${doctor?.last_name || ''}`,
                                },
                            ]}
                        />

                        <Row gutter={[16, 16]}>
                            <Col span={10}>
                                <Space direction="vertical" block>
                                    <Space block>
                                        <Image
                                            src={doctor?.profile_picture || EMPTY_IMAGE}
                                            alt="doctor"
                                            style={{ width: 240, height: 280, objectFit: 'cover' }}
                                        />
                                        <Space direction="vertical" block>
                                            <Typography.Text
                                                style={{
                                                    color: globalToken.colorPrimary,
                                                }}
                                                loading={isPending}
                                            >
                                                {doctor?.specialties}
                                            </Typography.Text>
                                            <Typography.Title
                                                level={5}
                                                style={{
                                                    color: globalToken.colorPrimary,
                                                }}
                                                loading={isPending}
                                            >
                                                {doctor?.first_name || ''} {doctor?.last_name || ''}
                                            </Typography.Title>
                                        </Space>
                                    </Space>

                                    <Space block direction="vertical">
                                        <Typography.Title
                                            level={4}
                                            style={{
                                                color: globalToken.colorPrimary,
                                            }}
                                        >
                                            Overview
                                        </Typography.Title>
                                        <Typography.Paragraph loading={isPending}>
                                            {<SafeHTML content={doctor?.bio || ''} />}
                                        </Typography.Paragraph>
                                    </Space>
                                </Space>
                            </Col>
                            <Col span={14}>
                                <Card>
                                    <Space direction="vertical" block>
                                        <Space direction="vertical" block size={'small'}>
                                            <Typography.Title
                                                level={4}
                                                style={{
                                                    color: globalToken.colorPrimary,
                                                }}
                                                disableMargin
                                            >
                                                Specialties
                                            </Typography.Title>
                                            <Typography.Text loading={isPending}>
                                                {doctor?.specialties}
                                            </Typography.Text>
                                        </Space>
                                        <Space direction="vertical" block size={'small'}>
                                            <Typography.Title
                                                level={4}
                                                style={{
                                                    color: globalToken.colorPrimary,
                                                }}
                                                disableMargin
                                            >
                                                Workplace
                                            </Typography.Title>
                                            <Typography.Text loading={isPending}>
                                                {doctor?.hospital_name}
                                            </Typography.Text>
                                        </Space>
                                        <Collapse
                                            items={[
                                                {
                                                    key: '1',
                                                    label: 'Education background',
                                                    children: (
                                                        <Typography.Paragraph loading={isPending}>
                                                            <SafeHTML
                                                                content={doctor?.education || ''}
                                                            />
                                                        </Typography.Paragraph>
                                                    ),
                                                },
                                            ]}
                                        />
                                        <Collapse
                                            items={[
                                                {
                                                    key: '1',
                                                    label: 'Experience',
                                                    children: (
                                                        <Typography.Paragraph loading={isPending}>
                                                            <SafeHTML
                                                                content={doctor?.experience || ''}
                                                            />
                                                        </Typography.Paragraph>
                                                    ),
                                                },
                                            ]}
                                        />
                                        <Collapse
                                            items={[
                                                {
                                                    key: '1',
                                                    label: 'Member of',
                                                    children: (
                                                        <Typography.Paragraph loading={isPending}>
                                                            <SafeHTML
                                                                content={doctor?.member_of || ''}
                                                            />
                                                        </Typography.Paragraph>
                                                    ),
                                                },
                                            ]}
                                        />
                                        <Collapse
                                            items={[
                                                {
                                                    key: '1',
                                                    label: 'Researches and publications',
                                                    children: (
                                                        <Typography.Paragraph loading={isPending}>
                                                            <SafeHTML
                                                                content={doctor?.publications || ''}
                                                            />
                                                        </Typography.Paragraph>
                                                    ),
                                                },
                                            ]}
                                        />
                                    </Space>
                                </Card>
                            </Col>
                        </Row>
                    </Space>
                </ProfessionalDetailWrapper>
            </div>
        </Flex>
    );
};

export default ProfessionalDetails;
