import { Button, Dropdown, RdMenuProps, RdTableProps, Typography } from '1byte-react-design';
import { PATHS } from '@/router/paths';
import { getStatusesAPI, IExamination } from 'booking-doctor-js';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, Link } from 'react-router';
import { DeleteOutlined, MoreOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { getStatusesQuery } from '@/services/status/queries';

const useTableExaminationManagement = () => {
    const { t } = useTranslation(['bkd.examination', 'action']);
    const { data: statuses } = useQuery(getStatusesQuery());

    const findStatusById = (statusId: number) => {
        return statuses?.find(status => status.id === statusId);
    };

    const columns = useMemo(() => {
        const generateMenu = (examination: IExamination): RdMenuProps => {
            const items: RdMenuProps['items'] = [
                {
                    label: (
                        <Link
                            to={generatePath(PATHS.ADMIN.EXAMINATION.DETAILS, {
                                examinationId: examination.id,
                            })}
                        >
                            {t('view_details', { ns: 'action' })}
                        </Link>
                    ),
                    key: '2',
                },
            ];

            return {
                items,
            };
        };

        return [
            {
                title: t('email'),
                render: (_, examination) => {
                    return <Typography.Text>{examination.email}</Typography.Text>;
                },
            },
            {
                title: t('status'),
                render: (_, examination) => {
                    const status = findStatusById(examination.status_id);
                    return <Typography.Text>{status?.name}</Typography.Text>;
                },
            },
            {
                width: 50,
                align: 'right',
                render: (_, examination) => {
                    const menuProps = generateMenu(examination);

                    return (
                        <Dropdown trigger={['click']} menu={menuProps} placement="bottomRight">
                            <Button icon={<MoreOutlined rotate={90} />} />
                        </Dropdown>
                    );
                },
            },
        ] as RdTableProps<IExamination>['columns'];
    }, [t, statuses]);

    return {
        columns,
    };
};

export default useTableExaminationManagement;
