import * as Yup from 'yup';
import { IExaminationFilter } from './types';

export const examinationFilterSchema: Yup.ObjectSchema<IExaminationFilter> = Yup.object({
    keywords: Yup.string().default(''),
    pageSize: Yup.number().default(10),
    pageNumber: Yup.number().default(1),
});
