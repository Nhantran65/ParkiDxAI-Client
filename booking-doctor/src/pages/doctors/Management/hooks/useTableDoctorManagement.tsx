import {
    Avatar,
    Button,
    Dropdown,
    Modal,
    notification,
    RdMenuProps,
    RdTableProps,
    Space,
    Typography,
} from '1byte-react-design';
import { PATHS } from '@/router/paths';
import { getInitials } from '@/services/profile/utils';
import { useDeleteUserMutation } from '@/services/user/mutations';
import { DeleteOutlined, MoreOutlined } from '@ant-design/icons';
import { IDoctor } from 'booking-doctor-js';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, Link } from 'react-router';

const useTableDoctorManagement = () => {
    const { t } = useTranslation(['bkd.user', 'action']);
    const { mutateAsync: deleteDoctorMutationAsync } = useDeleteUserMutation();

    const handleDelete = useCallback(
        (doctor: IDoctor) => {
            Modal.confirm({
                title: t('delete.confirm_title', {
                    ns: 'action',
                    entity_type: t('doctor', { ns: 'bkd.doctor' }),
                }),
                content: t('delete.confirm_content', {
                    ns: 'action',
                    entity_type: t('doctor', { ns: 'bkd.doctor' }),
                    target_name: doctor.email,
                }),
                okText: t('delete', { ns: 'action' }),
                okButtonProps: {
                    danger: true,
                },
                icon: null,
                onOk: async () => {
                    await deleteDoctorMutationAsync(doctor.user_id, {
                        onSuccess: () => {
                            notification.success({
                                description: t('delete.success_message', {
                                    ns: 'action',
                                    entity_type: t('doctor', { ns: 'bkd.doctor' }),
                                    target_name: doctor.email,
                                }),
                            });
                        },
                    });
                },
            });
        },
        [t, deleteDoctorMutationAsync]
    );

    const columns = useMemo(() => {
        const generateMenu = (doctor: IDoctor): RdMenuProps => {
            const items: RdMenuProps['items'] = [
                {
                    label: (
                        <Link
                            to={generatePath(PATHS.ADMIN.DOCTOR.DETAILS, {
                                doctorId: doctor.id,
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
                onClick: () => handleDelete(doctor),
            });

            return {
                items,
            };
        };

        return [
            {
                title: t('email'),
                render: (_, doctor) => {
                    return (
                        <Space>
                            <Avatar size={'small'} style={{ backgroundColor: '#f56a00' }}>
                                {doctor?.first_name && getInitials(doctor?.first_name)}
                            </Avatar>
                            <Link
                                to={generatePath(PATHS.ADMIN.DOCTOR.DETAILS, {
                                    doctorId: doctor.id,
                                })}
                            >
                                {doctor.email}
                            </Link>
                        </Space>
                    );
                },
            },

            {
                title: t('first_name'),
                render: (_, doctor) => {
                    return <Typography.Text>{doctor.first_name}</Typography.Text>;
                },
            },

            {
                title: t('last_name'),
                render: (_, doctor) => {
                    return <Typography.Text>{doctor.last_name}</Typography.Text>;
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
        ] as RdTableProps<IDoctor>['columns'];
    }, [t]);

    return {
        columns,
    };
};

export default useTableDoctorManagement;
