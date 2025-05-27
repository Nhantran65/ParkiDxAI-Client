import { PropsWithChildren } from 'react';

export interface IPageProps extends PropsWithChildren {
    /**
     * Title of the page that will be displayed in the browser tab using Helmet
     */
    title: string;

    /**
     * Whether to limit the width of the page content
     * @default true
     */
    isWidthLimit?: boolean;

    /**
     * Whether the page is in loading state
     * @default false
     */
    isLoading?: boolean;

    className?: string;
}
