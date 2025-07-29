import { RouteObject } from 'react-router-dom';

import { Layout } from '@layouts/Layout';
import { Dashboard } from '@pages/Dashboard';
import { ErrorFallback } from '@pages/Errors/ErrorFallback';

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
                element: <NotFoundError />,
                handle: { hideSidebar: true },
            },
        ],
    },
];
