import { Form, InputNumber, Radio } from '1byte-react-design';
import { useTranslation } from 'react-i18next';
import { IFormProps } from '../../types';

const LifestyleFactors = (props: IFormProps) => {
    const { form } = props;
    const { t } = useTranslation('bkd.examination');

    return (
        <div>
            <Form.ItemControl control={form.control} label={t('bmi')} name="bmi">
                <InputNumber />
            </Form.ItemControl>
            <Form.ItemControl control={form.control} label={t('smoking')} name="smoking">
                <Radio.Group>
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('alcohol_consumption')}
                name="alcohol_consumption"
                extra={t('alcohol_consumption.extra')}
            >
                <InputNumber min={0} max={20} />
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('physical_activity')}
                name="physical_activity"
                extra={t('physical_activity.extra')}
            >
                <InputNumber min={0} max={10} />
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('diet_quality')}
                name="diet_quality"
                extra={t('diet_quality.extra')}
            >
                <InputNumber min={0} max={10} />
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('sleep_quality')}
                name="sleep_quality"
                extra={t('sleep_quality.extra')}
            >
                <InputNumber min={4} max={10} />
            </Form.ItemControl>
        </div>
    );
};

export default LifestyleFactors;
