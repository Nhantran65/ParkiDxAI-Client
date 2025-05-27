import { Form, Radio } from '1byte-react-design';
import { useTranslation } from 'react-i18next';
import { IFormProps } from '../../types';

const MedicalHistory = (props: IFormProps) => {
    const { form } = props;
    const { t } = useTranslation(['bkd.examination']);

    return (
        <div>
            <Form.ItemControl
                control={form.control}
                label={t('family_history_parkinsons')}
                name="family_history_parkinsons"
                extra={t('family_history_parkinsons.extra')}
            >
                <Radio.Group>
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.ItemControl>
            <Form.ItemControl
                control={form.control}
                label={t('traumatic_brain_injury')}
                name="traumatic_brain_injury"
                extra="History of traumatic brain injury,"
            >
                <Radio.Group>
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.ItemControl>
            <Form.ItemControl
                control={form.control}
                label={t('hypertension')}
                name="hypertension"
                extra={t('hypertension.extra')}
            >
                <Radio.Group>
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.ItemControl>
            <Form.ItemControl
                control={form.control}
                label={t('diabetes')}
                name="diabetes"
                extra={t('diabetes.extra')}
            >
                <Radio.Group>
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                name="depression"
                label={t('depression')}
                extra={t('depression.extra')}
            >
                <Radio.Group>
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('stroke')}
                name="stroke"
                extra={t('stroke.extra')}
            >
                <Radio.Group>
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.ItemControl>
        </div>
    );
};

export default MedicalHistory;
