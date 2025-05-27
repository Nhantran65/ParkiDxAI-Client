import * as Yup from 'yup';

interface IFilterConfig {
    /**
     * Remove unspecified keys from objects
     * @default true
     */
    stripUnknown?: boolean;
}

export interface IUseFilterProps<T extends {}> {
    schema: Yup.ObjectSchema<T>;
    defaultValue?: T;
    config?: IFilterConfig;
}
