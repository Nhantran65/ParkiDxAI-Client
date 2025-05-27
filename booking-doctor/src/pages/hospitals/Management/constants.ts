import * as Yup from 'yup';
import { IHospitalFilter } from './types';

export const hospitalFilterSchema: Yup.ObjectSchema<IHospitalFilter> = Yup.object({
    keywords: Yup.string().default(''),
    pageSize: Yup.number().default(10),
    pageNumber: Yup.number().default(1),
});
