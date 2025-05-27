import { Form, InputNumber, Radio } from '1byte-react-design';
import { IFormProps } from '../../types';
import { useTranslation } from 'react-i18next';

const DemographicDetails = (props: IFormProps) => {
    const { form } = props;
    const { t } = useTranslation(['bkd.examination']);
    return (
        <div>
            <Form.ItemControl control={form.control} label={t('age')} name="age">
                <InputNumber />
            </Form.ItemControl>
            <Form.ItemControl control={form.control} label={t('gender')} name="gender">
                <Radio.Group>
                    <Radio value={true}>Male</Radio>
                    <Radio value={false}>Female</Radio>
                </Radio.Group>
            </Form.ItemControl>

            <Form.ItemControl control={form.control} label={t('ethnicity')} name="ethnicity">
                <Radio.Group>
                    <Radio value={1}>Caucasian</Radio>
                    <Radio value={2}>African American</Radio>
                    <Radio value={3}>Asian</Radio>
                    <Radio value={4}>Other</Radio>
                </Radio.Group>
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('education_level')}
                name="education_level"
            >
                <Radio.Group>
                    <Radio value={1}>None</Radio>
                    <Radio value={2}>High School</Radio>
                    <Radio value={3}>Bachelor's</Radio>
                    <Radio value={4}>Higher</Radio>
                </Radio.Group>
            </Form.ItemControl>
        </div>
    );
};

export default DemographicDetails;
