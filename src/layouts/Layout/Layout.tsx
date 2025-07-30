import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Sidebar } from '@components/index';
import { Navbar } from '@components/index';

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
