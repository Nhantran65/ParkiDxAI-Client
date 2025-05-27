import { DateType, IdType } from '../../models';
import { JFWError } from '../error';
import { JFWHttpCode } from '../http';

//#region Query params types
export interface IPageable {
    pageSize?: number;
    pageNumber?: number;
}

export interface ISortable<T = any> {
    sortDataField?: keyof T;
    sortOrder?: 'ASC' | 'DESC';
}

export interface IBaseFilter {
    modifiedUserBy?: IdType;
    modifiedDateFrom?: DateType;
    modifiedDateTo?: DateType;
    createdUserBy?: IdType;
    createdDateFrom?: DateType;
    createdDateTo?: DateType;

    limit?: number;
}
//#endregion

//#region Query response types
export interface HttpResponse<T = any> {
    success: boolean;
    message: string;
    data: T | null;
}

export interface ListData<T = any> {
    items: T[];

    totalItems: number;
    pageNumber: number;
    pageSize: number;
}

export type HttpResponseList<T = any> = HttpResponse<ListData<T>>;
//#endregion
