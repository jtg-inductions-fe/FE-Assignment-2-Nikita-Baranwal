import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Navbar, Sidebar } from '@components/index';
import { useNavbar } from '@container/Navbar.container';

import { AppContainer, ContentWrapper, MainContent } from './Layout.styles';

export const MainLayout = () => {
    const { drawerOpen, toggleDrawer } = useNavbar();

    return (
        <AppContainer>
            <Box sx={{ height: '64px', width: '100%' }}>
                <Navbar toggleDrawer={toggleDrawer} />
            </Box>
            <ContentWrapper>
                <Sidebar open={drawerOpen} onClose={toggleDrawer} />
                <MainContent>
                    <Outlet />
                </MainContent>
            </ContentWrapper>
        </AppContainer>
    );
};
