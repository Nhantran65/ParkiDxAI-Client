import { authLayoutLoader } from '@/layouts/Auth/loader';
import HomeLayout from '@/layouts/Home';
import { mainLayoutLoader } from '@/layouts/Main/loader';
import CreateExamination from '@/pages/CreateExamination';
import { dashboardPageLoader } from '@/pages/Dashboard/loader';
import Home from '@/pages/Home';
import ProfessionalDetails from '@/pages/ProfessionalDetail';
import Professionals from '@/pages/Professionals';
import { signInPageLoader } from '@/pages/auth/SignIn/loader';
import { signOutPageLoader } from '@/pages/auth/SignOut/loader';
import UnderConstruction from '@/pages/common/UnderConstruction';
import DoctorDetails from '@/pages/doctors/Details';
import PatientDetails from '@/pages/patients/Details';
import { Navigate, redirect, RouteObject } from 'react-router';
import {
    AuthLayout,
    Dashboard,
    DoctorsManagement,
    ExaminationDetails,
    ExaminationManagement,
    HospitalsDetails,
    HospitalsManagement,
    MainLayout,
    NotFound,
    PatientsManagement,
    SignIn,
} from './pages';
import { PATHS } from './paths';

export const routes: RouteObject[] = [
    //#region Auth layout
    {
        path: PATHS.AUTH.SELF,
        loader: authLayoutLoader,
        element: <AuthLayout />,
        children: [
            {
                path: PATHS.AUTH.SIGN_IN,
                loader: signInPageLoader,
                element: <SignIn />,
            },

            {
                path: PATHS.AUTH.SIGN_OUT,
                loader: signOutPageLoader,
            },
        ],
    },
    //#endregion

    //#region Main layout
    {
        path: PATHS.ADMIN.SELF,
        loader: mainLayoutLoader,
        element: <MainLayout />,
        children: [
            /** Redirect to dashboard page */
            {
                index: true,
                loader: () => redirect(PATHS.ADMIN.DASHBOARD.SELF),
            },

            {
                path: PATHS.ADMIN.DASHBOARD.SELF,
                loader: dashboardPageLoader,
                element: <ExaminationManagement />,
            },

            {
                path: PATHS.ADMIN.DOCTOR.SELF,
                children: [
                    {
                        path: PATHS.ADMIN.DOCTOR.MANAGEMENT,
                        element: <DoctorsManagement />,
                    },
                    {
                        path: PATHS.ADMIN.DOCTOR.DETAILS,
                        element: <DoctorDetails />,
                    },
                ],
            },

            {
                path: PATHS.ADMIN.PATIENT.SELF,
                children: [
                    {
                        path: PATHS.ADMIN.PATIENT.MANAGEMENT,
                        element: <PatientsManagement />,
                    },

                    {
                        path: PATHS.ADMIN.PATIENT.DETAILS,
                        element: <PatientDetails />,
                    },
                ],
            },

            {
                path: PATHS.ADMIN.HOSPITAL.SELF,
                children: [
                    {
                        path: PATHS.ADMIN.HOSPITAL.MANAGEMENT,
                        element: <HospitalsManagement />,
                    },

                    {
                        path: PATHS.ADMIN.HOSPITAL.DETAILS,
                        element: <HospitalsDetails />,
                    },
                ],
            },

            {
                path: PATHS.ADMIN.EXAMINATION.SELF,
                children: [
                    {
                        path: PATHS.ADMIN.EXAMINATION.MANAGEMENT,
                        element: <ExaminationManagement />,
                    },

                    {
                        path: PATHS.ADMIN.EXAMINATION.DETAILS,
                        element: <ExaminationDetails />,
                    },
                ],
            },

            {
                path: '*',
                element: <UnderConstruction />,
            },
        ],
    },

    {
        path: PATHS.SELF,
        // loader: homeLayoutLoader,
        element: <HomeLayout />,
        children: [
            /** Redirect to dashboard page */
            {
                index: true,
                loader: () => redirect(PATHS.HOME.SELF),
            },

            {
                path: PATHS.HOME.SELF,
                element: <Home />,
            },

            {
                path: PATHS.PROFESSIONALS.SELF,
                children: [
                    {
                        path: PATHS.PROFESSIONALS.MANAGEMENT,
                        element: <Professionals />,
                    },
                    {
                        path: PATHS.PROFESSIONALS.DETAILS,
                        element: <ProfessionalDetails />,
                    },
                ],
            },

            {
                path: '*',
                element: <UnderConstruction />,
            },
        ],
    },

    {
        path: PATHS.PATIENT_INTAKE.SELF,
        element: <CreateExamination />,
    },

    {
        path: PATHS.EXAMINATION.SELF,
        children: [
            {
                path: PATHS.EXAMINATION.DETAILS,
                element: <ExaminationDetails />,
            },
        ],
    },

    //#endregion

    //#region
    {
        path: PATHS.OTHER.NOT_FOUND,
        element: <NotFound />,
    },

    {
        path: '*',
        element: <Navigate to={PATHS.OTHER.NOT_FOUND} />,
    },
];
