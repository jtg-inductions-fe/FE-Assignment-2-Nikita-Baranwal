import { Outlet, useMatches } from 'react-router-dom';

import { Box } from '@mui/material';

import { Navbar, Sidebar } from '@components/index';
import { NAVBAR_HEIGHT } from '@constant/common.constant';
import { NotFound } from '@pages/Errors';

import { AppContainer, ContentWrapper, MainContent } from './Layout.styles';
import { RouteHandle } from './Layout.types';

export const Layout = () => {
    const matches = useMatches() as RouteHandle[];

    const shouldHideSidebar = matches.some(
        (match) => match.handle?.hideSidebar,
    );

    return (
        <AppContainer>
            <Box
                sx={(theme) => ({
                    height: theme.typography.pxToRem(NAVBAR_HEIGHT),
                    width: '100%',
                })}
            >
                <Navbar />
            </Box>
            <ContentWrapper>
                <Box>{!shouldHideSidebar && <Sidebar />}</Box>
                <Box>
                    <MainContent>
                        {shouldHideSidebar ? <NotFound /> : <Outlet />}
                    </MainContent>
                </Box>
            </ContentWrapper>
        </AppContainer>
    );
};
