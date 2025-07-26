import { RouteObject } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { ErrorFallback } from '../pages/Errors/ErrorFallback';
import { NotFound } from '../pages/Errors/NotFound';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Dashboard />,
        errorElement: <ErrorFallback />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];
