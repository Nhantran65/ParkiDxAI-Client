import DOMPurify from 'dompurify';
import { ISafeHTMLProps } from './types';
import { memo } from 'react';

const SafeHTML = (props: ISafeHTMLProps) => {
    const { content } = props;
    return (
        <span
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content || ''),
            }}
        />
    );
};

export default memo(SafeHTML);
