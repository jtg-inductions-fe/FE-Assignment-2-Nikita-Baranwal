import { Outlet, useMatches } from 'react-router-dom';

import { Sidebar } from '@components';
import { Navbar } from '@components';

import { AppContainer, ContentWrapper, MainContent } from './Layout.styles';
import { NotFoundError } from '../../pages/NotFound';

const Layout: React.FC = () => {
    const matches = useMatches();
    const isErrorPage = matches.some((match) => match.handle?.hideSidebar);

    return (
        <AppContainer>
            <Navbar />
            <ContentWrapper>
                {!isErrorPage && <Sidebar />}
                <MainContent>
                    {isErrorPage ? <NotFoundError /> : <Outlet />}
                </MainContent>
            </ContentWrapper>
        </AppContainer>
    );
};

export default Layout;
