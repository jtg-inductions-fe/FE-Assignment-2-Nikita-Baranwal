import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ErrorFallback } from 'pages/Errors/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CssBaseline, ThemeProvider, Typography } from '@mui/material';

import { routes } from './routes/router';
import { theme } from './theme';

const router = createBrowserRouter(routes);

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Typography variant="h1">Hello World</Typography>
                <RouterProvider router={router} />
            </ErrorBoundary>
        </ThemeProvider>
    </StrictMode>,
);
