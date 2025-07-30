import { NotFound } from 'pages/Errors/NotFound';
import { RouteObject } from 'react-router-dom';

import { Layout } from '../layouts/Layout/Layout';
import { Dashboard } from '../pages/Dashboard';
import { ErrorFallback } from '../pages/Errors/ErrorFallback';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
        ],
        errorElement: <ErrorFallback />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];
