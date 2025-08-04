import { RouteObject } from 'react-router-dom';

import { ErrorLayout } from '@layouts/PageLayout/ErrorLayout';
import { MainLayout } from '@layouts/PageLayout/MainLayout';
import { Dashboard } from '@pages/Dashboard';
import { ErrorFallback } from '@pages/ErrorFallback';
import { NotFound } from '@pages/Errors';

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
        path: '/server-error',
        element: <ErrorFallback />,
    },
    {
        path: '*',
        element: <ErrorLayout />,
        children: [
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
];
