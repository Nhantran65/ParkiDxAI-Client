import FallbackLoading from '@/components/FallbackLoading';
import { lazy, Suspense } from 'react';

export const Loadable =
    <P extends object>(Component: React.ComponentType<P>, isFullscreen = false) =>
    (props: P) => {
        return (
            <Suspense fallback={<FallbackLoading isFullscreen={isFullscreen} isCenter />}>
                <Component {...props} />
            </Suspense>
        );
    };

// Layout
export const AuthLayout = Loadable(
    lazy(() => import('@/layouts/Auth')),
    true
);
export const MainLayout = Loadable(
    lazy(() => import('@/layouts/Main')),
    true
);

// Page's auth layout
export const SignIn = Loadable(lazy(() => import('@/pages/auth/SignIn')));

// Pages's main layout
export const Dashboard = Loadable(lazy(() => import('@/pages/Dashboard')));

export const DoctorsManagement = Loadable(lazy(() => import('@/pages/doctors/Management')));
export const DoctorsDetails = Loadable(lazy(() => import('@/pages/doctors/Details')));
export const PatientsManagement = Loadable(lazy(() => import('@/pages/patients/Management')));
export const PatientsDetails = Loadable(lazy(() => import('@/pages/patients/Details')));
export const HospitalsManagement = Loadable(lazy(() => import('@/pages/hospitals/Management')));
export const HospitalsDetails = Loadable(lazy(() => import('@/pages/hospitals/Details')));
export const ExaminationManagement = Loadable(
    lazy(() => import('@/pages/examinations/Management'))
);
export const ExaminationDetails = Loadable(lazy(() => import('@/pages/examinations/Details')));
// Page's other layout
export const NotFound = Loadable(lazy(() => import('@/pages/common/NotFound')));
