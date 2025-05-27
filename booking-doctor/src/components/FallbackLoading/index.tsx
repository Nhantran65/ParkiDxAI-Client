import { FallbackLoadingWrapper } from './styles';
import { IFallbackLoadingProps } from './types';

const FallbackLoading = (props: IFallbackLoadingProps) => {
    const { isFullscreen = false, isCenter = false } = props;

    return (
        <FallbackLoadingWrapper
            // indicator={<LoadingOutlined spin />}
            fullscreen={isFullscreen}
            size="large"
            isCenter={isCenter}
        ></FallbackLoadingWrapper>
    );
};

export default FallbackLoading;
