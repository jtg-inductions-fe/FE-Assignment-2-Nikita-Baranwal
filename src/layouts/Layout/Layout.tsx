import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Sidebar } from '@components';
import { Navbar } from '@components';

import { MainContent } from './Layout.styles';

export const Layout = () => (
    <Box sx={{ display: 'flex' }}>
        <Navbar />
        <Sidebar />
        <MainContent>
            <Outlet />
        </MainContent>
    </Box>
);
