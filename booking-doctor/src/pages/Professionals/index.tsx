import {
    Breadcrumb,
    Col,
    Flex,
    Pagination,
    Row,
    Space,
    Spin,
    Typography,
} from '1byte-react-design';
import { DOCTOR_EXAMPLE } from '@/models/constants/image';
import { useTranslation } from 'react-i18next';
import BannerStatic from '../ProfessionalDetail/components/BannerStatic';
import Doctor from './components/Doctor';
import { ProfessionalsWrapper } from './styles';
import { useQuery } from '@tanstack/react-query';
import { getDoctorsQuery } from '@/services/doctor/queries';

const Professionals = () => {
    const { t } = useTranslation(['pages.professionals', 'bkd.user']);

    const { data: doctors, isPending: isPendingDoctors } = useQuery(getDoctorsQuery());

    // const doctors = [
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    //     {
    //         name: 'Dr. Do Tat Cuong',
    //         education: 'Professor, Ph.D, MD',
    //         specialties: 'Trauma - Orthopedics department',
    //         hospitals:
    //             'Orthopedic Trauma & Sports Medicine Center - Vinmec Times City International General Hospital',
    //         avatar: DOCTOR_EXAMPLE,
    //     },
    // ];

    return (
        <Space direction="vertical" block>
            <BannerStatic />
            <Flex justify="center">
                <div
                    style={{ width: '1070px', minHeight: '100vh', marginTop: 40, marginBottom: 40 }}
                >
                    <ProfessionalsWrapper isWidthLimit={false} title={t('page_meta_title')}>
                        <Breadcrumb
                            items={[
                                {
                                    title: 'Home',
                                    href: '/',
                                },
                                {
                                    title: 'Professionals',
                                },
                            ]}
                        />
                        <Typography.Title level={2}>{t('page_title')}</Typography.Title>

                        <Spin spinning={isPendingDoctors}>
                            <Row gutter={[16, 16]}>
                                {doctors?.map(doctor => (
                                    <Col span={12}>
                                        <Doctor key={doctor.email} doctor={doctor} />
                                    </Col>
                                ))}
                            </Row>

                            {/* <Flex justify="center" style={{ marginTop: 20 }}>
                                <Pagination
                                    total={100}
                                    pageSize={10}
                                    current={1}
                                    onChange={(page, pageSize) => {
                                        console.log(page, pageSize);
                                    }}
                                />
                            </Flex> */}
                        </Spin>
                    </ProfessionalsWrapper>
                </div>
            </Flex>
        </Space>
    );
};

export default Professionals;
