import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Navbar } from '@components/Navbar';
import { useNavbar } from '@container/Navbar.container';

export const ErrorLayout = () => {
    const { toggleDrawer } = useNavbar();

    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ height: '64px', width: '100%' }}>
                <Navbar toggleDrawer={toggleDrawer} />
            </Box>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
};
