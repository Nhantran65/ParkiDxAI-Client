import { ICreateExaminationData } from 'booking-doctor-js';
import { UseFormReturn } from 'react-hook-form';

export interface IFormProps {
    form: UseFormReturn<ICreateExaminationData, any, undefined>;
}
