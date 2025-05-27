import { Flex, Typography } from '1byte-react-design';
import { useTranslation } from 'react-i18next';

const GlobalEmpty = () => {
    const { t } = useTranslation(['common']);

    return (
        <Flex justify="center">
            <Typography.Text
                style={{
                    opacity: 0.4,
                }}
                italic
                type="secondary"
            >
                {t('empty')}
            </Typography.Text>
        </Flex>
    );
};

export default GlobalEmpty;
