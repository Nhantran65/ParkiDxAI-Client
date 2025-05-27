import { Button, Form, Input, InputNumber } from '1byte-react-design';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import AceEditor from 'react-ace';
interface IFormValues {
    name: string;
    age: number;
}

const Test = () => {
    const { t } = useTranslation(['pages.device.management']);
    const schema: Yup.ObjectSchema<IFormValues> = Yup.object({
        name: Yup.string().required().min(3),
        age: Yup.number().min(18).defined(),
    });

    const { control, handleSubmit, formState, setFocus } = useForm({
        resolver: yupResolver(schema),
        progressive: true,
    });

    const handleSetError = () => {
        // setError('age', {
        //     message: 'This is a manual error',
        // });

        setFocus('name');
    };

    useEffect(() => {
        console.debug('Test');
    }, []);

    return (
        <AceEditor
            mode="json"
            theme="monokai"
            onChange={newValue => console.log(newValue)}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            width="100%"
        />
    );
};

export default Test;
