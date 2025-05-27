import { Breadcrumb, Space, Typography } from '1byte-react-design';
import { PATHS } from '@/router/paths';
import { getHospitalQuery } from '@/services/hospital/queries';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router';
import DetailsTab from './components/DetailsTab';
import { HospitalDetailsWrapper } from './styles';

const HospitalDetails = () => {
    const { t } = useTranslation(['pages.hospital.details', 'bkd.hospital', 'action']);

    const { hospitalId } = useParams<{ hospitalId: string }>();
    const { data: hospital } = useQuery(getHospitalQuery(Number(hospitalId)));

    return (
        <HospitalDetailsWrapper title={t('page_meta_title')}>
            <Space direction="vertical" block size="middle">
                <Breadcrumb
                    items={[
                        {
                            title: (
                                <Link to={PATHS.ADMIN.HOSPITAL.MANAGEMENT}>
                                    <Space size="small">
                                        <ArrowLeftOutlined />
                                        <Typography.Text>
                                            {t('back', {
                                                ns: 'action',
                                                context: 'with_entity_type',
                                                entity_type: t('hospital', {
                                                    ns: 'bkd.hospital',
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
                        {hospital?.name}
                    </Typography.Title>
                    <Typography.Text>
                        {t('id', { ns: 'bkd.hospital', context: 'long' })}:{' '}
                        <Typography.Text code>{hospital?.id}</Typography.Text>
                    </Typography.Text>
                </Space>
                <DetailsTab />,
            </Space>
        </HospitalDetailsWrapper>
    );
};

export default HospitalDetails;
