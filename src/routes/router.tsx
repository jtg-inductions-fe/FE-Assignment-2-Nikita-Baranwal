import { RouteObject } from 'react-router-dom';

import { ErrorFallback, NotFound } from '@pages/Errors';

import { Layout } from '../layouts/MainLayout/Layout';
import { Dashboard } from '../pages/Dashboard';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorFallback />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: '*',
                element: <NotFound />,
                handle: { hideSidebar: true },
            },
        ],
    },
];
