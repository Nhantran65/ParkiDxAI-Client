import { Divider, Typography } from '1byte-react-design';
import { generateLimeResultQuery } from '@/services/result/queries';
import { Pie, PieConfig } from '@ant-design/charts';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { ResultCardWrapper } from './styles';

import { Bar, BidirectionalBar, BidirectionalBarConfig } from '@ant-design/plots';
import { LimeExplanation } from 'booking-doctor-js';
import ExplanationChart from '../LimeExplanationChart';

const ResultCard = () => {
    const { t } = useTranslation(['bkd.examination', 'pages.examination.details']);
    const { examinationId } = useParams<{ examinationId: string }>();
    const { data: result } = useQuery(generateLimeResultQuery(Number(examinationId)));

    const probabilities = result?.lime_result.prediction_probabilities;

    const data = [
        {
            type: 'PD',
            value: probabilities?.['PD'],
        },
        {
            type: 'NO PD',
            value: probabilities?.['No PD'] ?? probabilities?.['No PD'],
        },
    ];
    const config: PieConfig = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,

        colors: ['#001122', '#003322', '#004422', '#005522', '#006622', '#007722', '#008822'],

        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }: any) => `${(percent * 100).toFixed(1)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    } as PieConfig;
    return (
        <ResultCardWrapper
            title={
                <Typography.Title level={5}>
                    {t('tab.details.result', { ns: 'pages.examination.details' })}
                </Typography.Title>
            }
        >
            <Pie {...config} height={250} />
            <Divider />
            <Typography.Title level={5}>Explanations</Typography.Title>
            <ExplanationChart explanations={result?.lime_result.explanation || []} />
        </ResultCardWrapper>
    );
};

export default ResultCard;
