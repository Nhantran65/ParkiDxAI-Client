import { Breadcrumb, Space, Typography } from '1byte-react-design';
import { PATHS } from '@/router/paths';
import { getExaminationQuery } from '@/services/examination/queries';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router';
import DetailsTab from './components/DetailsTab';
import { ExaminationDetailsWrapper } from './styles';
import { checkIsAuthenticated } from '@/services/profile/utils';

const ExaminationDetails = () => {
    const { t } = useTranslation(['pages.examination.details', 'bkd.examination', 'action']);

    const { examinationId } = useParams<{ examinationId: string }>();
    const { data: examination } = useQuery(getExaminationQuery(Number(examinationId)));
    const isAuthenticated = checkIsAuthenticated();

    return (
        <ExaminationDetailsWrapper title={t('page_meta_title')}>
            <Space direction="vertical" block size="middle">
                {isAuthenticated && (
                    <Breadcrumb
                        items={[
                            {
                                title: (
                                    <Link to={PATHS.ADMIN.EXAMINATION.MANAGEMENT}>
                                        <Space size="small">
                                            <ArrowLeftOutlined />
                                            <Typography.Text>
                                                {t('back', {
                                                    ns: 'action',
                                                    context: 'with_entity_type',
                                                    entity_type: t('examination', {
                                                        ns: 'bkd.examination',
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
                )}
                <Space direction="vertical" size="small">
                    <Typography.Title disableMargin level={2}>
                        {examination?.email}
                    </Typography.Title>
                    <Typography.Text>
                        {t('id', { ns: 'bkd.examination', context: 'long' })}:{' '}
                        <Typography.Text code>{examination?.id}</Typography.Text>
                    </Typography.Text>
                </Space>
                <DetailsTab />
            </Space>
        </ExaminationDetailsWrapper>
    );
};

export default ExaminationDetails;
