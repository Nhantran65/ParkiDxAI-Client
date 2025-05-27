import { RdMenuProps } from '1byte-react-design';
import {
    DashboardGoogleSVG,
    FaceGoogleSVG,
    LabProfileGoogleSVG,
    LocationCityGoogleSVG,
    PersonalInjuryGoogleSVG,
} from '@/components/icons';
import { PATHS } from '@/router/paths';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import Icon from '../components/Icon';

export const useGetSiderAdminMenuItems = () => {
    const { t } = useTranslation('sidebar');
    const siderCPanelMenuItems: RdMenuProps['items'] = useMemo(() => {
        return [
            {
                key: PATHS.ADMIN.EXAMINATION.SELF,
                icon: <Icon component={LabProfileGoogleSVG} />,
                label: <Link to={PATHS.ADMIN.EXAMINATION.SELF}>{t('examinations')}</Link>,
            },

            {
                key: PATHS.ADMIN.DOCTOR.SELF,
                icon: <Icon component={FaceGoogleSVG} />,
                label: <Link to={PATHS.ADMIN.DOCTOR.MANAGEMENT}>{t('doctors')}</Link>,
            },

            {
                key: PATHS.ADMIN.PATIENT.SELF,
                icon: <Icon component={PersonalInjuryGoogleSVG} />,
                label: <Link to={PATHS.ADMIN.PATIENT.MANAGEMENT}>{t('patients')}</Link>,
            },

            {
                key: PATHS.ADMIN.HOSPITAL.SELF,
                icon: <Icon component={LocationCityGoogleSVG} />,
                label: <Link to={PATHS.ADMIN.HOSPITAL.MANAGEMENT}>{t('hospitals')}</Link>,
            },
        ] as RdMenuProps['items'];
    }, [t]);

    return siderCPanelMenuItems;
};
