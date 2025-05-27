import * as Yup from 'yup';
import { IDoctorFilter } from './types';

export const doctorFilterSchema: Yup.ObjectSchema<IDoctorFilter> = Yup.object({
    keywords: Yup.string().default(''),
    pageSize: Yup.number().default(10),
    pageNumber: Yup.number().default(1),
});
