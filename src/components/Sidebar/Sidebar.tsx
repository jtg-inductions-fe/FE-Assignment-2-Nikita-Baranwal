import { Drawer, Typography } from '@mui/material';

import { theme } from '@theme/index';

export const Sidebar = () => {
    const {
        typography: { pxToRem },
    } = theme;

    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', md: 'block' },
                width: pxToRem(280),
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: pxToRem(280),
                    boxSizing: 'border-box',
                    top: pxToRem(64),
                },
            }}
        >
            <Typography variant="h6">Sidebar</Typography>
        </Drawer>
    );
};
