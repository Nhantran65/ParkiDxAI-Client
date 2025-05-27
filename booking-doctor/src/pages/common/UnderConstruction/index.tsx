import { Button, Flex, Image, Space, Typography } from '1byte-react-design';
import { MAINTENANCE_IMAGE } from '@/models/constants/image';
import { PATHS } from '@/router/paths';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router';
import { UnderConstructionLayout, UnderConstructionWrapper } from './styles';
import { useMemo } from 'react';

const UnderConstruction = () => {
    const { t } = useTranslation(['pages.under_construction', 'common']);
    const location = useLocation();

    const isAdmin = useMemo(() => {
        return location.pathname.includes('/admin');
    }, [location]);

    return (
        <UnderConstructionLayout>
            <UnderConstructionWrapper title={t('page_meta_title')}>
                <Flex
                    style={{
                        height: '100%',
                    }}
                    align="center"
                    justify="center"
                >
                    <Space size={'large'} direction="vertical" align="center">
                        <Image
                            src={MAINTENANCE_IMAGE}
                            alt="not_found"
                            preview={false}
                            style={{
                                width: 400,
                            }}
                        />

                        <Typography.Title level={1}>
                            {t('title', {
                                featureName: location.pathname
                                    .split('/')
                                    [location.pathname.split('/').length - 1].split('-')
                                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(' '),
                            })}
                        </Typography.Title>
                        <Typography.Text>{t('message')}</Typography.Text>
                        <Link to={isAdmin ? PATHS.ADMIN.SELF : PATHS.SELF}>
                            <Button type="primary">{t('back_to_homepage')}</Button>
                        </Link>
                    </Space>
                </Flex>
            </UnderConstructionWrapper>
        </UnderConstructionLayout>
    );
};

export default UnderConstruction;
