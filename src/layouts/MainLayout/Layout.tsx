import { Outlet, useMatches } from 'react-router-dom';

import { Box } from '@mui/material';

import { Navbar, Sidebar } from '@components/index';
import { NotFound } from '@pages/Errors';

import { AppContainer, ContentWrapper, MainContent } from './Layout.styles';
import { RouteHandle } from './Layout.types';

export const Layout = () => {
    const matches = useMatches() as RouteHandle[];

    const isErrorPage = matches.some((match) => match.handle?.hideSidebar);

    return (
        <AppContainer>
            <Box sx={{ height: '64px', width: '100%' }}>
                <Navbar />
            </Box>
            <ContentWrapper>
                <Box>{!isErrorPage && <Sidebar />}</Box>
                <Box>
                    <MainContent>
                        {isErrorPage ? <NotFound /> : <Outlet />}
                    </MainContent>
                </Box>
            </ContentWrapper>
        </AppContainer>
    );
};
