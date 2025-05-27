import * as Yup from 'yup';
import { IPatientFilter } from './types';

export const patientFilterSchema: Yup.ObjectSchema<IPatientFilter> = Yup.object({
    keywords: Yup.string().default(''),
    pageSize: Yup.number().default(10),
    pageNumber: Yup.number().default(1),
});
