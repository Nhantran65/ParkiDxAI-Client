import { rdTheme } from '1byte-react-design';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DashboardWrapper } from './styles';

const Dashboard = () => {
    const { t } = useTranslation(['pages.dashboard']);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = rdTheme.useToken();

    return (
        <DashboardWrapper title={t('page_meta_title')}>
            <div
                style={{
                    padding: 24,
                    textAlign: 'center',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <p>long content</p>
                {
                    // indicates very long content
                    Array.from({ length: 100 }, (_, index) => (
                        <React.Fragment key={index}>
                            {index % 20 === 0 && index ? 'more' : '...'}
                            <br />
                        </React.Fragment>
                    ))
                }
            </div>
        </DashboardWrapper>
    );
};

export default Dashboard;
