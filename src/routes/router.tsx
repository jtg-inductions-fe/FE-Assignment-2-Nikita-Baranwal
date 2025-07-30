import { RouteObject } from 'react-router-dom';

import { Layout } from '../layouts/Layout/Layout';
import { Dashboard } from '../pages/Dashboard';
import { ErrorFallback } from '../pages/ErrorFallback';
import { NotFoundError } from '../pages/NotFound';

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
