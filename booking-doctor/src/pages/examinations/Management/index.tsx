import { Space, Table, Typography } from '1byte-react-design';
import PageManagementHeader from '@/components/PageManagementHeader';
import { getExaminationsQuery } from '@/services/examination/queries';
import { useQuery } from '@tanstack/react-query';
import { IExamination } from 'booking-doctor-js';
import { useTranslation } from 'react-i18next';
import useTableExaminationManagement from './hooks/useTableExaminationManagement';
import { ExaminationManagementWrapper } from './styles';

const ExaminationManagement = () => {
    const { t } = useTranslation(['pages.examination.management', 'bkd.user']);

    const { columns } = useTableExaminationManagement();

    const { data: examinationResponseList, isFetching: isPendingExaminationQuery } = useQuery({
        ...getExaminationsQuery(),
        staleTime: 0, // Disable cache
    });

    return (
        <>
            <ExaminationManagementWrapper title={t('page_meta_title')}>
                <Space direction="vertical" block>
                    <PageManagementHeader title={t('page_meta_title')} />

                    <Typography.Text type="secondary">{t('page_hint')}</Typography.Text>

                    <Table<IExamination>
                        rowKey={'id'}
                        columns={columns}
                        dataSource={examinationResponseList || []}
                        loading={isPendingExaminationQuery}
                        scroll={{ x: 1000 }}
                        style={{
                            overflowX: 'auto',
                        }}
                    />
                </Space>
            </ExaminationManagementWrapper>
        </>
    );
};

export default ExaminationManagement;
