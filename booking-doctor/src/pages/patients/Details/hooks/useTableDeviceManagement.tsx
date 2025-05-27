import { RdTableProps, Space, Typography } from '1byte-react-design';
import { ADMIN_PATHS } from '@/router/paths/adminPaths';
import { MobileOutlined } from '@ant-design/icons';
import { IPatient } from '@jframework/bkd-js';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, Link } from 'react-router';

export const useTablePatientManagement = () => {
    const { t } = useTranslation(['bkd.patient', 'action']);

    const columns = useMemo(() => {
        return [
            {
                title: t('name', { context: 'long' }),
                render: (_, patient) => {
                    return (
                        <Space size={'small'}>
                            <Link
                                to={generatePath(ADMIN_PATHS.DEVICE.DETAILS, {
                                    patientId: patient.id,
                                })}
                            >
                                <Typography.Link>{patient.name}</Typography.Link>
                            </Link>
                            {patient.isMobileApp && <MobileOutlined />}
                        </Space>
                    );
                },
            },
            {
                title: t('os_patient'),
                render: (_, patient) => {
                    return <Typography.Text>{patient.osPatient}</Typography.Text>;
                },
                width: 180,
            },
            {
                title: t('status'),
                render: (_, patient) => {
                    return <Typography.Text>{patient.status}</Typography.Text>;
                },
                width: 120,
            },
        ] as RdTableProps<IPatient>['columns'];
    }, []);

    return {
        columns,
    };
};
