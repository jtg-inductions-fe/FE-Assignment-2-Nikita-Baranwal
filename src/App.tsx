import { ErrorFallback } from 'pages/Errors/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes/router';

const router = createBrowserRouter(routes);

const App: React.FC = () => (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <RouterProvider router={router} />
    </ErrorBoundary>
);

export default App;
