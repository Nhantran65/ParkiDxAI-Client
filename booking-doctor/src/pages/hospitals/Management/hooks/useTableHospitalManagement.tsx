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
import { useDeleteHospitalMutation } from '@/services/hospital/mutations';
import { DeleteOutlined, MoreOutlined } from '@ant-design/icons';
import { IHospital } from 'booking-doctor-js';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, Link } from 'react-router';

const useTableHospitalManagement = () => {
    const { t } = useTranslation(['bkd.hospital', 'action']);
    const { mutateAsync: deleteHospitalMutationAsync } = useDeleteHospitalMutation();

    const handleDelete = useCallback(
        (hospital: IHospital) => {
            Modal.confirm({
                title: t('delete.confirm_title', {
                    ns: 'action',
                    entity_type: t('hospital', { ns: 'bkd.hospital' }),
                }),
                content: t('delete.confirm_content', {
                    ns: 'action',
                    entity_type: t('hospital', { ns: 'bkd.hospital' }),
                    target_name: hospital.name,
                }),
                okText: t('delete', { ns: 'action' }),
                okButtonProps: {
                    danger: true,
                },
                icon: null,
                onOk: async () => {
                    await deleteHospitalMutationAsync(hospital.id, {
                        onSuccess: () => {
                            notification.success({
                                description: t('delete.success_message', {
                                    ns: 'action',
                                    entity_type: t('hospital', { ns: 'bkd.hospital' }),
                                    target_name: hospital.name,
                                }),
                            });
                        },
                    });
                },
            });
        },
        [t, deleteHospitalMutationAsync]
    );

    const columns = useMemo(() => {
        const generateMenu = (hospital: IHospital): RdMenuProps => {
            const items: RdMenuProps['items'] = [
                {
                    label: (
                        <Link
                            to={generatePath(PATHS.ADMIN.HOSPITAL.DETAILS, {
                                hospitalId: hospital.id,
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
                onClick: () => handleDelete(hospital),
            });

            return {
                items,
            };
        };

        return [
            {
                title: t('name'),
                render: (_, hospital) => {
                    return (
                        <Link
                            to={generatePath(PATHS.ADMIN.HOSPITAL.DETAILS, {
                                hospitalId: hospital.id,
                            })}
                        >
                            {hospital.name}
                        </Link>
                    );
                },
            },
            {
                title: t('description'),
                render: (_, hospital) => {
                    return <Typography.Text>{hospital.description}</Typography.Text>;
                },
            },

            {
                title: t('address'),
                render: (_, hospital) => {
                    return <Typography.Text>{hospital.address}</Typography.Text>;
                },
            },

            {
                title: t('phone'),
                render: (_, hospital) => {
                    return <Typography.Text>{hospital.phone}</Typography.Text>;
                },
            },

            {
                title: t('email'),
                render: (_, hospital) => {
                    return <Typography.Text>{hospital.email}</Typography.Text>;
                },
            },

            {
                title: t('website'),
                render: (_, hospital) => {
                    return <Typography.Text>{hospital.website}</Typography.Text>;
                },
            },

            {
                title: t('established'),
                render: (_, hospital) => {
                    return <Typography.Text>{hospital.established}</Typography.Text>;
                },
            },

            {
                width: 50,
                align: 'right',
                render: (_, hospital) => {
                    const menuProps = generateMenu(hospital);

                    return (
                        <Dropdown trigger={['click']} menu={menuProps} placement="bottomRight">
                            <Button icon={<MoreOutlined rotate={90} />} />
                        </Dropdown>
                    );
                },
            },
        ] as RdTableProps<IHospital>['columns'];
    }, [t]);

    return {
        columns,
    };
};

export default useTableHospitalManagement;
