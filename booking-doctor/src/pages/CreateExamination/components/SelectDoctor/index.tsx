import { Form, Input, Radio, RdBaseOption, Select } from '1byte-react-design';
import { useTranslation } from 'react-i18next';
import { IFormProps } from '../../types';
import { useQuery } from '@tanstack/react-query';
import { getDoctorsQuery } from '@/services/doctor/queries';
import { useMemo } from 'react';
import { IDoctor } from 'booking-doctor-js';

const SelectDoctor = (props: IFormProps) => {
    const { form } = props;
    const { t } = useTranslation(['bkd.examination']);
    const { data: doctors } = useQuery(getDoctorsQuery());

    const doctorOptions = useMemo(() => {
        return doctors?.map(
            doctor =>
                ({
                    label: doctor.email,
                    value: doctor.id,
                } as RdBaseOption<IDoctor['id']>)
        );
    }, [doctors]);

    return (
        <div>
            <Form.ItemControl
                control={form.control}
                label={t('doctor_id')}
                name="doctor_id"
                extra={t('doctor_id.extra')}
                required
            >
                <Select options={doctorOptions} />
            </Form.ItemControl>
            <Form.ItemControl
                control={form.control}
                label={t('email')}
                name="email"
                extra={t('email.extra')}
                required
            >
                <Input />
            </Form.ItemControl>
        </div>
    );
};

export default SelectDoctor;
