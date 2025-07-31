import { RouteObject } from 'react-router-dom';

import { ErrorLayout } from '@layouts/PageLayout/ErrorLayout';
import { MainLayout } from '@layouts/PageLayout/MainLayout';
import { Dashboard } from '@pages/Dashboard';
import { ErrorFallback } from '@pages/ErrorFallback';
import { NotFoundError } from '@pages/NotFound';

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
        element: <ErrorLayout />,
        children: [
            {
                path: '*',
                element: <NotFoundError />,
            },
        ],
    },
];
