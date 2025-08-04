import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorFallback } from '@pages/Errors';

import { routes } from './routes/router';

const router = createBrowserRouter(routes);

export const App = () => (
    <ErrorBoundary fallbackRender={ErrorFallback}>
        <RouterProvider router={router} />
    </ErrorBoundary>
);
