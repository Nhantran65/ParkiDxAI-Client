import { Button, ConfigProvider, Image, Space, Typography } from '1byte-react-design';
import { DOCTOR_DIRECTORY } from '@/models/constants/image';
import BannerCardStatic from '../BannerCardStatic';
import {
    BannerStaticWrapper,
    CarouselFloatingContainerWrapper,
    CarouselFloatingContent,
} from './styles';

const BannerStatic = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <BannerStaticWrapper>
            <Image width={'100%'} preview={false} src={DOCTOR_DIRECTORY} alt="banner" />

            <ConfigProvider
                theme={{
                    token: {
                        colorText: '#fff',
                    },
                }}
            >
                <CarouselFloatingContainerWrapper justify="center">
                    <CarouselFloatingContent>
                        <Typography.Title level={2}>Doctors directory</Typography.Title>
                    </CarouselFloatingContent>
                </CarouselFloatingContainerWrapper>
            </ConfigProvider>

            <BannerCardStatic />
        </BannerStaticWrapper>
    );
};

export default BannerStatic;
