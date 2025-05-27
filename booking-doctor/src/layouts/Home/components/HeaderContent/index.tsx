import { Menu } from '1byte-react-design';
import BrandLogo from '@/components/jfw/BrandLogo';
import { Link } from 'react-router';
import { HeaderContentContainer, HeaderContentWrapper } from './styles';
import { PATHS } from '@/router/paths';

const HeaderContent = () => {
    return (
        <HeaderContentWrapper>
            <HeaderContentContainer>
                <BrandLogo style={{ width: '100%', height: '46px' }} />

                <Menu
                    style={{
                        width: '100%',
                    }}
                    mode="horizontal"
                    items={[
                        {
                            label: <Link to={PATHS.HOME.SELF}>Home</Link>,
                            key: 'home',
                        },
                        {
                            label: <Link to={PATHS.PROFESSIONALS.SELF}>Professionals</Link>,
                            key: 'professionals',
                        },
                        {
                            label: <Link to={PATHS.PATIENT_INTAKE.SELF}>Diagnosis AI</Link>,
                            key: 'diagnosis-ai',
                        },
                    ]}
                />
            </HeaderContentContainer>
        </HeaderContentWrapper>
    );
};

export default HeaderContent;
