import ErrorBoundary from '@/components/ErrorBoundary';
import FallbackLoading from '@/components/FallbackLoading';
import { RootLayout } from '@/layouts/Root';
import { rootLayoutLoader } from '@/layouts/Root/loader';
import { createBrowserRouter } from 'react-router';
import { routes } from './routes';
// export default Router;
export const router = createBrowserRouter([
    {
        path: '/',
        loader: rootLayoutLoader,
        element: <RootLayout />,
        children: routes,
        HydrateFallback: () => <FallbackLoading isFullscreen={true} />,
        errorElement: <ErrorBoundary />,
    },
]);
