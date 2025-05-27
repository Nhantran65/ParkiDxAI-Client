import { Breadcrumb, Space, Typography } from '1byte-react-design';
import { PATHS } from '@/router/paths';
import { getDoctorQuery } from '@/services/doctor/queries';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router';
import DetailsTab from './components/DetailsTab';
import { DoctorDetailsWrapper } from './styles';

const DoctorDetails = () => {
    const { t } = useTranslation(['pages.doctor.details', 'bkd.doctor', 'action']);

    const { doctorId } = useParams<{ doctorId: string }>();
    const { data: doctor } = useQuery(getDoctorQuery(Number(doctorId)));

    return (
        <DoctorDetailsWrapper title={t('page_meta_title')}>
            <Space direction="vertical" block size="middle">
                <Breadcrumb
                    items={[
                        {
                            title: (
                                <Link to={PATHS.ADMIN.DOCTOR.MANAGEMENT}>
                                    <Space size="small">
                                        <ArrowLeftOutlined />
                                        <Typography.Text>
                                            {t('back', {
                                                ns: 'action',
                                                context: 'with_entity_type',
                                                entity_type: t('doctor', {
                                                    ns: 'bkd.doctor',
                                                    count: 2,
                                                }),
                                            })}
                                        </Typography.Text>
                                    </Space>
                                </Link>
                            ),
                        },
                    ]}
                />
                <Space direction="vertical" size="small">
                    <Typography.Title disableMargin level={2}>
                        {doctor?.email}
                    </Typography.Title>
                    <Typography.Text>
                        {t('id', { ns: 'bkd.doctor', context: 'long' })}:{' '}
                        <Typography.Text code>{doctor?.id}</Typography.Text>
                    </Typography.Text>
                </Space>
                <DetailsTab />,
            </Space>
        </DoctorDetailsWrapper>
    );
};

export default DoctorDetails;
