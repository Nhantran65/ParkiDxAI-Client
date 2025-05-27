import { Button, Flex, Space, Table, Typography } from '1byte-react-design';
import PageManagementHeader from '@/components/PageManagementHeader';
import { getDoctorsQuery } from '@/services/doctor/queries';
import { PlusOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { IDoctor } from 'booking-doctor-js';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import CreateDoctorDrawer from './components/CreateDoctorDrawer';
import { ICreateDoctorDrawerRef } from './components/CreateDoctorDrawer/types';
import useTableDoctorManagement from './hooks/useTableDoctorManagement';
import { DoctorManagementWrapper } from './styles';

const DoctorManagement = () => {
    const { t } = useTranslation(['pages.doctor.management', 'bkd.user', 'action']);

    const { columns } = useTableDoctorManagement();
    const createDoctorDrawerRef = useRef<ICreateDoctorDrawerRef>(null);

    const { data: doctorResponseList, isFetching: isPendingDoctorQuery } = useQuery({
        ...getDoctorsQuery(),
        staleTime: 0, // Disable cache
    });

    const handleOpenCreateDoctorDrawer = () => {
        createDoctorDrawerRef.current?.open();
    };

    return (
        <>
            <DoctorManagementWrapper title={t('page_meta_title')}>
                <Space direction="vertical" block>
                    <Flex justify="space-between" align="center">
                        <Space direction="vertical">
                            <PageManagementHeader title={t('page_meta_title')} />

                            <Typography.Text type="secondary">{t('page_hint')}</Typography.Text>
                        </Space>

                        <Button
                            type="primary"
                            icon={<PlusOutlined />}
                            onClick={handleOpenCreateDoctorDrawer}
                        >
                            {t('create', {
                                ns: 'action',
                                context: 'with_entity_type',
                                entity_type: t('doctor', { ns: 'bkd.doctor' }),
                            })}
                        </Button>
                    </Flex>

                    <Table<IDoctor>
                        rowKey={'id'}
                        columns={columns}
                        dataSource={doctorResponseList || []}
                        loading={isPendingDoctorQuery}
                        scroll={{ x: 1000 }}
                        style={{
                            overflowX: 'auto',
                        }}
                    />
                </Space>
            </DoctorManagementWrapper>

            <CreateDoctorDrawer ref={createDoctorDrawerRef} />
        </>
    );
};

export default DoctorManagement;
