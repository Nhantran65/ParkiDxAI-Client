import { Button, Flex, Space, Table, Typography } from '1byte-react-design';
import PageManagementHeader from '@/components/PageManagementHeader';
import { getHospitalsQuery } from '@/services/hospital/queries';
import { PlusOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { IHospital } from 'booking-doctor-js';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ICreateHospitalDrawerRef } from './components/CreateHospitalDrawer/types';
import useTableHospitalManagement from './hooks/useTableHospitalManagement';
import { HospitalManagementWrapper } from './styles';
import CreateHospitalDrawer from './components/CreateHospitalDrawer';

const HospitalManagement = () => {
    const { t } = useTranslation(['pages.hospital.management', 'bkd.hospital']);

    const { columns } = useTableHospitalManagement();
    const createHospitalDrawerRef = useRef<ICreateHospitalDrawerRef>(null);

    const { data: hospitalResponseList, isFetching: isPendingHospitalQuery } = useQuery({
        ...getHospitalsQuery(),
        staleTime: 0, // Disable cache
    });

    const handleOpenCreateHospitalDrawer = () => {
        createHospitalDrawerRef.current?.open();
    };

    return (
        <>
            <HospitalManagementWrapper title={t('page_meta_title')}>
                <Space direction="vertical" block>
                    <Flex justify="space-between" align="center">
                        <Space direction="vertical">
                            <PageManagementHeader title={t('page_meta_title')} />

                            <Typography.Text type="secondary">{t('page_hint')}</Typography.Text>
                        </Space>

                        <Button
                            type="primary"
                            icon={<PlusOutlined />}
                            onClick={handleOpenCreateHospitalDrawer}
                        >
                            {t('create', {
                                ns: 'action',
                                context: 'with_entity_type',
                                entity_type: t('hospital', { ns: 'bkd.hospital' }),
                            })}
                        </Button>
                    </Flex>

                    <Table<IHospital>
                        rowKey={'id'}
                        columns={columns}
                        dataSource={hospitalResponseList || []}
                        loading={isPendingHospitalQuery}
                        scroll={{ x: 1000 }}
                        style={{
                            overflowX: 'auto',
                        }}
                    />
                </Space>
            </HospitalManagementWrapper>

            <CreateHospitalDrawer ref={createHospitalDrawerRef} />
        </>
    );
};

export default HospitalManagement;
