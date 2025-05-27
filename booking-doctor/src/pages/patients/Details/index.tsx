import { Breadcrumb, Space, Typography } from '1byte-react-design';
import { PATHS } from '@/router/paths';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router';
import DetailsTab from './components/DetailsTab';
import { PatientDetailsWrapper } from './styles';
import { getPatientsQuery } from '@/services/user/queries';
import { useMemo } from 'react';

const PatientDetails = () => {
    const { t } = useTranslation(['pages.patient.details', 'bkd.patient', 'action']);
    const navigate = useNavigate();
    const { patientId } = useParams<{ patientId: string }>();
    const { data: patients, isPending } = useQuery(getPatientsQuery());

    const patient = useMemo(() => {
        return patients?.find(pt => pt.id === Number(patientId));
    }, [patientId, patients]);

    if (!patient && !isPending) navigate(PATHS.OTHER.NOT_FOUND);

    return (
        <PatientDetailsWrapper title={t('page_meta_title')}>
            <Space direction="vertical" block size="middle">
                <Breadcrumb
                    items={[
                        {
                            title: (
                                <Link to={PATHS.ADMIN.PATIENT.MANAGEMENT}>
                                    <Space size="small">
                                        <ArrowLeftOutlined />
                                        <Typography.Text>
                                            {t('back', {
                                                ns: 'action',
                                                context: 'with_entity_type',
                                                entity_type: t('patient', {
                                                    ns: 'bkd.patient',
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
                        {patient?.email}
                    </Typography.Title>
                    <Typography.Text>
                        {t('id', { ns: 'bkd.patient', context: 'long' })}:{' '}
                        <Typography.Text code>{patient?.id}</Typography.Text>
                    </Typography.Text>
                </Space>
                <DetailsTab />,
            </Space>
        </PatientDetailsWrapper>
    );
};

export default PatientDetails;
