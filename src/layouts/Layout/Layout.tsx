import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Navbar, Sidebar } from '@components/index';

import { MainContent } from './Layout.styles';

export const Layout = () => (
    <Box display="flex">
        <Navbar />
        <Sidebar />
        <MainContent>
            <Outlet />
        </MainContent>
    </Box>
);
