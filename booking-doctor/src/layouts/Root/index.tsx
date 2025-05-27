import { App, ConfigProvider } from '1byte-react-design';
import globalStyles from '@/assets/styles/globalStyles';
import { themeConfig } from '@/config/1byte-react-design';
import { renderRequireMark } from '@/config/1byte-react-design/components/Form/RequiredMark';
import { GlobalHelmet } from '@/config/react-helmet-async/components/GlobalHelmet';
import { queryClient } from '@/config/react-query';
import store from '@/redux/store';
import { Global } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { Outlet, ScrollRestoration } from 'react-router';

export const RootLayout = () => {
    return (
        <CookiesProvider>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    {/* 
                        Provide debug tools for React Query in developer mode.
                    */}
                    <ReactQueryDevtools />

                    {/*
                        This component will emulate the browser's scroll restoration on location changes after loaders have completed
                        to ensure the scroll position is restored to the right spot, even across domains.
                    */}
                    <ScrollRestoration />

                    {/*
                        This component will apply the global styles to the application.
                    */}
                    <Global styles={globalStyles} />

                    {/*
                        This config favicon and title for the application.
                    */}
                    <GlobalHelmet baseTitle={'Booking Doctor'} faviconUrl={'/favicon.ico'} />

                    {/*
                        This component will wrap the application with the 1Byte React Design.
                    */}
                    <ConfigProvider
                        // renderEmpty={GlobalEmpty}
                        theme={themeConfig}
                        form={{
                            colon: false, // Disable the colon after the label in horizontal form
                            requiredMark: renderRequireMark,
                        }}
                    >
                        <App>
                            <Outlet />
                        </App>
                    </ConfigProvider>
                </QueryClientProvider>
            </Provider>
        </CookiesProvider>
    );
};
