import { Button, Carousel, ConfigProvider, Image, Space, Typography } from '1byte-react-design';
import { BANNER_1 } from '@/models/constants/image';
import BannerCard from '../BannerCard';
import {
    BannerCarouselWrapper,
    CarouselFloatingContainerWrapper,
    CarouselFloatingContent,
} from './styles';

const BannerCarousel = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <BannerCarouselWrapper>
            <Carousel afterChange={onChange}>
                <Image width={'100%'} preview={false} src={BANNER_1} alt="banner" />
                <Image width={'100%'} preview={false} src={BANNER_1} alt="banner" />
                <Image width={'100%'} preview={false} src={BANNER_1} alt="banner" />
                <Image width={'100%'} preview={false} src={BANNER_1} alt="banner" />
            </Carousel>

            <ConfigProvider
                theme={{
                    token: {
                        colorText: '#fff',
                    },
                }}
            >
                <CarouselFloatingContainerWrapper justify="center">
                    <CarouselFloatingContent>
                        <Space
                            style={{
                                width: 430,
                            }}
                            size="middle"
                            direction="vertical"
                            block
                        >
                            <Typography.Title level={2}>
                                Revolutionizing Parkinson’s Diagnosis Through Explainable AI.
                            </Typography.Title>
                            <Typography.Text>
                                ParkiDxAI supports doctors with transparent, data-driven insights
                                for early and accurate Parkinson’s diagnosis..
                            </Typography.Text>

                            <Button type="primary">More</Button>
                        </Space>
                    </CarouselFloatingContent>
                </CarouselFloatingContainerWrapper>
            </ConfigProvider>

            <BannerCard />
        </BannerCarouselWrapper>
    );
};

export default BannerCarousel;
