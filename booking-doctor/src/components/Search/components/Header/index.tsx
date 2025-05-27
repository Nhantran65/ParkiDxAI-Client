import { RdSearchProps, Space } from '1byte-react-design';
import { InputSearchStyles, SearchHeaderWrapper } from './styles';
import { ISearchHeaderProps } from './types';

export const SearchHeader = (props: ISearchHeaderProps) => {
    const { defaultKeywords, placeholder, onChangeKeywords } = props;

    const handleChangeKeywords: RdSearchProps['onSearch'] = newKeywords => {
        onChangeKeywords?.(newKeywords);
    };

    return (
        <SearchHeaderWrapper>
            <Space size="small" direction="vertical" block>
                <InputSearchStyles
                    defaultValue={defaultKeywords}
                    placeholder={placeholder}
                    onSearch={handleChangeKeywords}
                />

                {/* <Button
                    color="primary"
                    variant="outlined"
                    icon={<CaretDownOutlined />}
                    iconPosition="end"
                >
                    Advanced search
                </Button> */}
            </Space>
        </SearchHeaderWrapper>
    );
};
