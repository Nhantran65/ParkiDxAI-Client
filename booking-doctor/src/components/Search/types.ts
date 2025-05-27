import { ISearchFooterProps } from './components/Footer/types';
import { ISearchHeaderProps } from './components/Header/types';

export interface ISearchProps<T extends {}> {
    value: T;
    onChange: (value: T) => void;

    header: ISearchHeaderProps;
    footer?: Omit<ISearchFooterProps<T>, 'filterValue' | 'onChangeFilterValue'>;
}
