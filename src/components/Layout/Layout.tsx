import { Outlet, useMatches } from 'react-router-dom';

import { Box } from '@mui/material';

import { Sidebar } from '@components';
import { Navbar } from '@components';

import { MainContent } from './Layout.styles';
import { NotFoundError } from '../../pages/NotFound';

const Layout: React.FC = () => {
    const matches = useMatches();
    const isErrorPage = matches.some((match) => match.handle?.hideSidebar);

    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar />
            {!isErrorPage && <Sidebar />}
            <MainContent>
                {isErrorPage ? <NotFoundError /> : <Outlet />}
            </MainContent>
        </Box>
    );
};

export default Layout;
