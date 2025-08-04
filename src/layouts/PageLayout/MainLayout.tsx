import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Navbar, Sidebar } from '@components/index';
import { NAVBAR_HEIGHT } from '@constant/common.constant';
import {
    AppContainer,
    ContentWrapper,
    MainContent,
} from '@layouts/Layout/Layout.styles';

export const MainLayout = () => (
    <AppContainer>
        <Box height={NAVBAR_HEIGHT} width="100%">
            <Navbar />
        </Box>
        <ContentWrapper>
            <Sidebar />
            <MainContent>
                <Outlet />
            </MainContent>
        </ContentWrapper>
    </AppContainer>
);
