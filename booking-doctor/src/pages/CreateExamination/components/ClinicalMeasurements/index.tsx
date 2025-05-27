import { Form, Input, InputNumber } from '1byte-react-design';
import { useTranslation } from 'react-i18next';
import { IFormProps } from '../../types';

const ClinicalMeasurements = (props: IFormProps) => {
    const { form } = props;
    const { t } = useTranslation(['bkd.examination']);

    return (
        <div>
            <Form.ItemControl
                control={form.control}
                label={t('systolic_bp')}
                name="systolic_bp"
                extra={t('systolic_bp.extra')}
            >
                <InputNumber min={90} max={180} />
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('diastolic_bp')}
                name="diastolic_bp"
                extra={t('diastolic_bp.extra')}
            >
                <InputNumber min={60} max={120} />
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('cholesterol_total')}
                name="cholesterol_total"
                extra={t('cholesterol_total.extra')}
            >
                <InputNumber min={150} max={300} />
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('cholesterol_ldl')}
                name="cholesterol_ldl"
                extra={t('cholesterol_ldl.extra')}
            >
                <InputNumber min={50} max={200} />
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('cholesterol_hdl')}
                name="cholesterol_hdl"
                extra={t('cholesterol_hdl.extra')}
            >
                <InputNumber min={150} max={200} />
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('cholesterol_triglycerides')}
                name="cholesterol_triglycerides"
                extra={t('cholesterol_triglycerides.extra')}
            >
                <InputNumber min={50} max={400} />
            </Form.ItemControl>
        </div>
    );
};

export default ClinicalMeasurements;
