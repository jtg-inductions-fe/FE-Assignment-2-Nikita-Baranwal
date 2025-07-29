import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Sidebar } from '@components';
import { Navbar } from '@components';

import { MainContent } from './Layout.styles';
import { LayoutProps } from './Layout.types';

const Layout: React.FC<LayoutProps> = () => (
    <Box sx={{ display: 'flex' }}>
        <Navbar />
        <Sidebar />
        <MainContent>
            <Outlet />
        </MainContent>
    </Box>
);
export default Layout;
