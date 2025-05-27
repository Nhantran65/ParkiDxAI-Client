import AccountInformationCard from '../AccountInformationCard';
import { DetailsTabWrapper } from './styles';

const DetailsTab = () => {
    return (
        <DetailsTabWrapper size="middle" block direction="vertical">
            <AccountInformationCard />
        </DetailsTabWrapper>
    );
};

export default DetailsTab;
