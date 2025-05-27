import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import * as Yup from 'yup';
import { IUseFilterProps } from './useFilter.types';

export const useFilter = <T extends NonNullable<unknown>>(props: IUseFilterProps<T>) => {
    const { schema, defaultValue, config } = props;
    const { stripUnknown = true } = config || {};
    const [searchParams, setSearchParams] = useSearchParams(new URLSearchParams(defaultValue));

    const filterValue = useMemo(() => {
        return schema.cast(Object.fromEntries(searchParams), {
            stripUnknown,
        }) as Yup.InferType<typeof schema>;
    }, [searchParams, schema, stripUnknown]);

    const handleChangeFilter = useCallback(
        (filterValue: Partial<T>) => {
            setSearchParams(
                new URLSearchParams(Object.entries(filterValue as Record<string, any>))
            );
        },
        [setSearchParams]
    );

    return {
        value: filterValue,
        onChange: handleChangeFilter,
    };
};
