import { ErrorTemplate } from '@components/Error';
import { ERROR_TYPES } from '@components/Error/Error.constants';
import { Navbar } from '@components/Navbar';
import { useNavbar } from '@container/Navbar.container';

export const ErrorFallback = () => {
    const { toggleDrawer } = useNavbar();

    return (
        <>
            <Navbar toggleDrawer={toggleDrawer} />
            <ErrorTemplate variant={ERROR_TYPES.SERVER_ERROR} />
        </>
    );
};
