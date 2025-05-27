import { Spin } from '1byte-react-design';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from './styles';
import { IPageProps } from './types';

const Page = (props: IPageProps) => {
    const { title, children, isWidthLimit = true, isLoading = false, className } = props;
    return (
        <PageWrapper isWidthLimit={isWidthLimit} className={className}>
            <Helmet title={title} />
            {isLoading ? <Spin fullscreen={true} /> : children}
        </PageWrapper>
    );
};

export default Page;
