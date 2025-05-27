import { BidirectionalBar, BidirectionalBarConfig } from '@ant-design/charts';
import { LimeExplanation } from 'booking-doctor-js';

interface Props {
    explanations: LimeExplanation[];
}

const ExplanationChart = ({ explanations }: Props) => {
    const data = explanations.map(item => {
        const weight = Math.abs(item.weight);
        return {
            country: item.feature,
            'No PD': item.side === 'No PD' ? weight : 0,
            PD: item.side === 'PD' ? weight : 0,
        };
    });

    const config: BidirectionalBarConfig = {
        data,
        xField: 'country',
        yField: ['No PD', 'PD'],
        style: {
            fill: (d: any) => {
                if (d.groupKey === 'PD') return '#2989ff';
                return '#28cccd';
            },
        },
    };

    return <BidirectionalBar {...config} height={600} />;
};

export default ExplanationChart;
