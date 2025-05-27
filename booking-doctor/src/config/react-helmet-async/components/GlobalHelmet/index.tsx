import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { IGlobalHelmet } from './types';

export const GlobalHelmet = (props: IGlobalHelmet) => {
    const { baseTitle, faviconUrl } = props;
    
    const titleTemplate = useMemo(() => {
        if (baseTitle) {
            return `%s | ${baseTitle}`;
        }

        return `%s`;
    }, [baseTitle]);

    return (
        <Helmet titleTemplate={titleTemplate}>
            {faviconUrl && <link rel="icon" href={faviconUrl} />}
        </Helmet>
    );
};
