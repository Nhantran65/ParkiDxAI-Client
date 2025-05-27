import { Form, Radio } from '1byte-react-design';
import { useTranslation } from 'react-i18next';
import { IFormProps } from '../../types';

const Symptoms = (props: IFormProps) => {
    const { form } = props;
    const { t } = useTranslation(['bkd.examination']);

    return (
        <div>
            <Form.ItemControl
                control={form.control}
                label={t('tremor')}
                name="tremor"
                extra={t('tremor.extra')}
            >
                <Radio.Group>
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.ItemControl>

            <Form.ItemControl
                name="rigidity"
                control={form.control}
                label={t('rigidity')}
                extra={t('rigidity.extra')}
            >
                <Radio.Group>
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('bradykinesia')}
                name="bradykinesia"
                extra={t('bradykinesia.extra')}
            >
                <Radio.Group>
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('postural_instability')}
                name="postural_instability"
                extra={t('postural_instability.extra')}
            >
                <Radio.Group>
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('speech_problems')}
                name="speech_problems"
                extra={t('speech_problems.extra')}
            >
                <Radio.Group>
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('sleep_disorders')}
                name="sleep_disorders"
                extra={t('sleep_disorders.extra')}
            >
                <Radio.Group>
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('constipation')}
                name="constipation"
                extra="Presence of constipation."
            >
                <Radio.Group>
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.ItemControl>
        </div>
    );
};

export default Symptoms;
