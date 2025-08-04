import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Navbar, Sidebar } from '@components/index';
import { useNavbar } from '@container/Navbar.container';

import { AppContainer, ContentWrapper, MainContent } from './Layout.styles';
import { MainLayoutProps } from './Layout.types';

export const MainLayout = ({ useSidebar = true }: MainLayoutProps) => {
    const { drawerOpen, toggleDrawer } = useNavbar();

    return (
        <AppContainer>
            <Box height="64px" width="100%">
                <Navbar toggleDrawer={toggleDrawer} />
            </Box>

            <ContentWrapper>
                {useSidebar && (
                    <Sidebar open={drawerOpen} onClose={toggleDrawer} />
                )}
                <MainContent>
                    <Outlet />
                </MainContent>
            </ContentWrapper>
        </AppContainer>
    );
};
