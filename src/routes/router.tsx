import { RouteObject } from 'react-router-dom';

import { MainLayout } from '@layouts/MainLayout/MainLayout';
import { Dashboard } from '@pages/Dashboard';
import { ErrorFallback, NotFound } from '@pages/Errors';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorFallback />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
        ],
    },
    {
        path: '*',
        element: <MainLayout useSidebar={false} />,
        children: [
            {
                path: 'server-error',
                element: <ErrorFallback />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
];
