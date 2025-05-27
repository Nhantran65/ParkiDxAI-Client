import { Form, InputNumber } from '1byte-react-design';
import { useTranslation } from 'react-i18next';
import { IFormProps } from '../../types';

const CognitiveAndFunctionalAssessments = (props: IFormProps) => {
    const { form } = props;
    const { t } = useTranslation(['bkd.examination']);

    return (
        <div>
            <Form.ItemControl
                control={form.control}
                label={t('updrs_score')}
                name="updrs_score"
                extra={t('updrs_score.extra')}
            >
                <InputNumber min={0} max={199} />
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('moca_score')}
                name="moca_score"
                extra={t('moca_score.extra')}
            >
                <InputNumber min={0} max={30} />
            </Form.ItemControl>

            <Form.ItemControl
                control={form.control}
                label={t('functional_assessment')}
                name="functional_assessment"
                extra={t('functional_assessment.extra')}
            >
                <InputNumber min={0} max={10} />
            </Form.ItemControl>
        </div>
    );
};

export default CognitiveAndFunctionalAssessments;
