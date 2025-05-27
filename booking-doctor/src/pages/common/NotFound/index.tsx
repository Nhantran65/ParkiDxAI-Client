import { Button, Flex, Image, Space, Typography } from '1byte-react-design';
import { NOT_FOUND_IMAGE } from '@/models/constants/image';
import { PATHS } from '@/router/paths';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router';
import { NotFoundLayout, NotFoundWrapper } from './styles';

const NotFound = () => {
    const { t } = useTranslation(['pages.not_found', 'common']);
    const location = useLocation();

    const isAdmin = useMemo(() => {
        return location.pathname.includes('/admin');
    }, [location]);

    return (
        <NotFoundLayout>
            <NotFoundWrapper title={t('page_meta_title')}>
                <Flex
                    style={{
                        height: '100%',
                    }}
                    align="center"
                    justify="center"
                >
                    <Space size={'large'} direction="vertical" align="center">
                        <Image
                            src={NOT_FOUND_IMAGE}
                            alt="not_found"
                            preview={false}
                            style={{
                                width: 400,
                            }}
                        />

                        <Typography.Title level={1}>404</Typography.Title>
                        <Typography.Title level={2}>
                            {t('not_found', {
                                ns: 'common',
                                context: 'with_entity_type',
                                entity_type: t('page', { ns: 'common' }),
                            })}
                        </Typography.Title>
                        <Typography.Text>{t('message')}</Typography.Text>
                        <Link to={isAdmin ? PATHS.ADMIN.SELF : PATHS.SELF}>
                            <Button type="primary">{t('back_to_homepage')}</Button>
                        </Link>
                    </Space>
                </Flex>
            </NotFoundWrapper>
        </NotFoundLayout>
    );
};

export default NotFound;
