import { Form } from '1byte-react-design';
import { useState } from 'react';
import { SearchBody } from './components/Body';
import { SearchFooter } from './components/Footer';
import { SearchHeader } from './components/Header';
import { SearchWrapper } from './styles';
import { ISearchProps } from './types';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Search = <T extends Record<string, any>>(props: ISearchProps<T>) => {
    const { value, header, footer, onChange } = props;
    const [isOpenAdvancedSearch, setIsOpenAdvancedSearch] = useState<boolean>(false);
    return (
        <SearchWrapper>
            <Form>
                <SearchHeader {...header} />
                {isOpenAdvancedSearch && <SearchBody />}
                {footer && (
                    <SearchFooter<T>
                        {...footer}
                        filterValue={value}
                        onChangeFilterValue={onChange}
                    />
                )}
            </Form>
        </SearchWrapper>
    );
};
