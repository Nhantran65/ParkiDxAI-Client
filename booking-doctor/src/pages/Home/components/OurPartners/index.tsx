import { Carousel, Flex, Image, Typography } from '1byte-react-design';
import { CarouselStyled, OurPartnersWrapper } from './styles';
import { CAROUSEL1, CAROUSEL2, CAROUSEL3 } from '@/models/constants/image';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const OurPartners = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Flex justify="center">
            <OurPartnersWrapper>
                <Flex justify="center">
                    <Typography.Title level={2}>Our Partners</Typography.Title>
                </Flex>

                <CarouselStyled
                    style={{
                        height: 100,
                    }}
                    afterChange={onChange}
                    slidesToShow={3}
                    autoplay
                    infinite
                >
                    <Image
                        src={CAROUSEL1}
                        style={{
                            width: '100%',
                        }}
                        preview={false}
                    />
                    <Image
                        src={CAROUSEL2}
                        style={{
                            width: '100%',
                        }}
                        preview={false}
                    />
                    <Image
                        src={CAROUSEL3}
                        style={{
                            width: '100%',
                        }}
                        preview={false}
                    />
                    <Image
                        src={CAROUSEL1}
                        style={{
                            width: '100%',
                        }}
                        preview={false}
                    />
                    <Image
                        src={CAROUSEL2}
                        style={{
                            width: '100%',
                        }}
                        preview={false}
                    />
                    <Image
                        src={CAROUSEL3}
                        style={{
                            width: '100%',
                        }}
                        preview={false}
                    />
                </CarouselStyled>
            </OurPartnersWrapper>
        </Flex>
    );
};

export default OurPartners;
