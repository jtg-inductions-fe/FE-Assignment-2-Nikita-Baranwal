import { JSX } from 'react';

import { Outlet, useMatches } from 'react-router-dom';

import { Box } from '@mui/material';

import { Sidebar } from '@components';

import { AppContainer, ContentWrapper, MainContent } from './Layout.styles';
import { NotFoundError } from '../../pages/NotFound';

export const Layout = ({ navBar }: { navBar: JSX.Element }) => {
    const matches = useMatches();
    const isErrorPage = matches.some((match) => match.handle?.hideSidebar);

    return (
        <AppContainer>
            <Box
                sx={{ width: '100%', height: '100px', backgroundColor: 'red' }}
            >
                {navBar}
            </Box>
            <ContentWrapper>
                {!isErrorPage && <Sidebar />}
                <MainContent>
                    {isErrorPage ? <NotFoundError /> : <Outlet />}
                </MainContent>
            </ContentWrapper>
        </AppContainer>
    );
};
