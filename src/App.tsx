import { ErrorFallback } from 'pages/Errors/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes/router';

const router = createBrowserRouter(routes);

const App = () => (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <RouterProvider router={router} />
    </ErrorBoundary>
);

export default App;
