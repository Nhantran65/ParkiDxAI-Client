import { Button, Flex, Space, Table, Typography } from '1byte-react-design';
import PageManagementHeader from '@/components/PageManagementHeader';
import { getPatientsQuery } from '@/services/user/queries';
import { PlusOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { IPatient } from 'booking-doctor-js';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import CreatePatientDrawer from './components/CreatePatientDrawer';
import { ICreatePatientDrawerRef } from './components/CreatePatientDrawer/types';
import useTablePatientManagement from './hooks/useTablePatientManagement';
import { PatientManagementWrapper } from './styles';

const PatientManagement = () => {
    const { t } = useTranslation(['pages.patient.management', 'bkd.user', 'bkd.patient']);
    const createPatientDrawerRef = useRef<ICreatePatientDrawerRef>(null);
    const { columns } = useTablePatientManagement();

    const { data: patientResponseList, isFetching: isPendingPatientQuery } = useQuery({
        ...getPatientsQuery(),
        staleTime: 0, // Disable cache
    });

    const handleOpenCreatePatientDrawer = () => {
        createPatientDrawerRef.current?.open();
    };

    return (
        <>
            <PatientManagementWrapper title={t('page_meta_title')}>
                <Space direction="vertical" block>
                    <Flex justify="space-between" align="center">
                        <Space direction="vertical">
                            <PageManagementHeader title={t('page_meta_title')} />

                            <Typography.Text type="secondary">{t('page_hint')}</Typography.Text>
                        </Space>

                        <Button
                            type="primary"
                            icon={<PlusOutlined />}
                            onClick={handleOpenCreatePatientDrawer}
                        >
                            {t('create', {
                                ns: 'action',
                                context: 'with_entity_type',
                                entity_type: t('patient', { ns: 'bkd.patient' }),
                            })}
                        </Button>
                    </Flex>

                    <Table<IPatient>
                        rowKey={'id'}
                        columns={columns}
                        dataSource={patientResponseList || []}
                        loading={isPendingPatientQuery}
                        scroll={{ x: 1000 }}
                        style={{
                            overflowX: 'auto',
                        }}
                    />
                </Space>

                <CreatePatientDrawer ref={createPatientDrawerRef} />
            </PatientManagementWrapper>
        </>
    );
};

export default PatientManagement;
