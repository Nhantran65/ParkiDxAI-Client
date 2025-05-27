import AccountInformationCard from '../AccountInformationCard';
import PersonalInformationCard from '../PersonalInformationCard';
import { DetailsTabWrapper } from './styles';

const DetailsTab = () => {
    return (
        <DetailsTabWrapper size="middle" block direction="vertical">
            <AccountInformationCard />
            <PersonalInformationCard />
        </DetailsTabWrapper>
    );
};

export default DetailsTab;
