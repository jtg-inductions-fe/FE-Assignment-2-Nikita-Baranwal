import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Navbar, Sidebar } from '@components/index';
import { NAVBAR_HEIGHT } from '@constant/common.constant';
import { useNavbar } from '@container/Navbar.container';

import { AppContainer, ContentWrapper, MainContent } from './MainLayout.styles';
import { MainLayoutProps } from './MainLayout.types';

export const MainLayout = ({ useSidebar = true }: MainLayoutProps) => {
    const { drawerOpen, toggleDrawer } = useNavbar();

    return (
        <AppContainer>
            <Box height={NAVBAR_HEIGHT} width="100%">
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
