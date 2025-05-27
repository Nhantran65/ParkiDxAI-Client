import { RdSelectProps } from '1byte-react-design';
import { Key, ReactNode } from 'react';

interface IFieldItem<T extends {}> extends RdSelectProps {
    name: keyof T;
    label: ReactNode;
}

export interface ISearchFooterProps<T extends {}> {
    totalItems?: number;
    showTotalItemsCount?: number;
    tooltip?: string;
    isLoading?: boolean;

    filterValue?: T;
    fields?: IFieldItem<T>[];
    onChangeFilterValue?: (filterValue: T) => void;
}
