import {
    Button,
    Dropdown,
    Modal,
    notification,
    RdMenuProps,
    RdTableProps,
    Typography,
} from '1byte-react-design';
import { PATHS } from '@/router/paths';
import { useDeleteUserMutation } from '@/services/user/mutations';
import { DeleteOutlined, MoreOutlined } from '@ant-design/icons';
import { IPatient } from 'booking-doctor-js';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, Link } from 'react-router';

const useTablePatientManagement = () => {
    const { t } = useTranslation(['bkd.user', 'action']);
    const { mutateAsync: deletePatientMutationAsync } = useDeleteUserMutation();

    const handleDelete = useCallback(
        (patient: IPatient) => {
            Modal.confirm({
                title: t('delete.confirm_title', {
                    ns: 'action',
                    entity_type: t('patient', { ns: 'bkd.patient' }),
                }),
                content: t('delete.confirm_content', {
                    ns: 'action',
                    entity_type: t('patient', { ns: 'bkd.patient' }),
                    target_name: patient.email,
                }),
                okText: t('delete', { ns: 'action' }),
                okButtonProps: {
                    danger: true,
                },
                icon: null,
                onOk: async () => {
                    await deletePatientMutationAsync(patient.id, {
                        onSuccess: () => {
                            notification.success({
                                description: t('delete.success_message', {
                                    ns: 'action',
                                    entity_type: t('patient', { ns: 'bkd.patient' }),
                                    target_name: patient.email,
                                }),
                            });
                        },
                    });
                },
            });
        },
        [t, deletePatientMutationAsync]
    );

    const columns = useMemo(() => {
        const generateMenu = (patient: IPatient): RdMenuProps => {
            const items: RdMenuProps['items'] = [
                {
                    label: (
                        <Link
                            to={generatePath(PATHS.ADMIN.PATIENT.DETAILS, {
                                patientId: patient.id,
                            })}
                        >
                            {t('view_details', { ns: 'action' })}
                        </Link>
                    ),
                    key: '2',
                },
            ];

            items.push({
                label: t('delete', { ns: 'action' }),
                key: '3',
                danger: true,
                icon: <DeleteOutlined />,
                onClick: () => handleDelete(patient),
            });

            return {
                items,
            };
        };
        return [
            {
                title: t('email'),
                render: (_, patient) => {
                    return (
                        <Link
                            to={generatePath(PATHS.ADMIN.PATIENT.DETAILS, {
                                patientId: patient.id,
                            })}
                        >
                            {patient.email}
                        </Link>
                    );
                },
            },

            {
                title: t('first_name'),
                render: (_, patient) => {
                    return <Typography.Text>{patient.first_name}</Typography.Text>;
                },
            },

            {
                title: t('last_name'),
                render: (_, patient) => {
                    return <Typography.Text>{patient.last_name}</Typography.Text>;
                },
            },

            {
                width: 50,
                align: 'right',
                render: (_, doctor) => {
                    const menuProps = generateMenu(doctor);

                    return (
                        <Dropdown trigger={['click']} menu={menuProps} placement="bottomRight">
                            <Button icon={<MoreOutlined rotate={90} />} />
                        </Dropdown>
                    );
                },
            },
        ] as RdTableProps<IPatient>['columns'];
    }, [t]);

    return {
        columns,
    };
};

export default useTablePatientManagement;
