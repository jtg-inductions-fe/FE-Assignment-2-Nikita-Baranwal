import { useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Sidebar } from '@components/index';
import { NAVBAR_HEIGHT } from '@constant/common.constant';
import { Navbar } from '@container/Navbar';

import { AppContainer, ContentWrapper, MainContent } from './MainLayout.styles';
import { MainLayoutProps } from './MainLayout.types';

export const MainLayout = ({ useSidebar = true }: MainLayoutProps) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => setDrawerOpen((prev) => !prev);

    return (
        <AppContainer>
            <Box height={NAVBAR_HEIGHT} width="100%">
                <Navbar toggleDrawer={toggleDrawer} />
            </Box>

            <ContentWrapper>
                {useSidebar && (
                    <Sidebar
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                    />
                )}
                <MainContent>
                    <Outlet />
                </MainContent>
            </ContentWrapper>
        </AppContainer>
    );
};
