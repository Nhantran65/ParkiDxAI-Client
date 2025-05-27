import { RdTableProps, Table, Typography } from '1byte-react-design';
import { generateLimeResultQuery } from '@/services/result/queries';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { ResultTableWrapper } from './styles';

import { LimeExplanation } from 'booking-doctor-js';
import { useMemo } from 'react';

const ResultTable = () => {
    const { t } = useTranslation(['bkd.examination', 'pages.examination.details']);
    const { examinationId } = useParams<{ examinationId: string }>();
    const { data: result } = useQuery(generateLimeResultQuery(Number(examinationId)));

    const explanations = result?.lime_result.explanation;
    const rawFeatureValues = result?.lime_result.raw_feature_values;

    const columns = useMemo(() => {
        return [
            {
                title: t('feature'),
                render: (_, explanation) => {
                    return explanation.feature;
                },
            },

            {
                title: t('value'),
                render: (_, explanation) => {
                    return (
                        <Typography.Text>
                            {rawFeatureValues?.[explanation.feature.split(' ')[0]]}
                        </Typography.Text>
                    );
                },
            },
        ] as RdTableProps<LimeExplanation>['columns'];
    }, [t, rawFeatureValues]);

    return (
        <ResultTableWrapper
            title={
                <Typography.Title level={5}>
                    {t('tab.details.result', { ns: 'pages.examination.details' })}
                </Typography.Title>
            }
        >
            <Table<LimeExplanation>
                columns={columns}
                dataSource={explanations}
                rowClassName={record => {
                    if (record.side === 'PD') return 'row-pd';
                    if (record.side === 'No PD') return 'row-no-pd';
                    return '';
                }}
            />
        </ResultTableWrapper>
    );
};

export default ResultTable;
