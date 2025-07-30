import { RouteObject } from 'react-router-dom';

import { Layout } from '@layouts/index';
import { Dashboard } from '@pages/Dashboard';
import { ErrorFallback, NotFound } from '@pages/Errors';

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
