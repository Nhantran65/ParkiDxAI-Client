import { useTranslation } from 'react-i18next';
import BannerCarousel from './components/BannerCarousel';
import MainContent from './components/MainContent';
import OurPartners from './components/OurPartners';
import { HomeWrapper } from './styles';

const Home = () => {
    const { t } = useTranslation(['pages.home', 'bkd.user']);

    return (
        <HomeWrapper isWidthLimit={false} title={t('page_meta_title')}>
            <BannerCarousel />
            <MainContent />
            <OurPartners />
        </HomeWrapper>
    );
};

export default Home;
