import './config/i18next';
import './config/i18next/formatters';
import './config/bookingDoctorJs/bookingDoctorJsConfig';
import './config/yup';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HelmetProvider>
            <Helmet></Helmet>
            <RouterProvider router={router} />
        </HelmetProvider>
    </React.StrictMode>
);
