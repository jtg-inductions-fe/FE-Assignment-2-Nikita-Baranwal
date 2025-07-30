import { Drawer, Typography } from '@mui/material';

import { theme } from '@theme';

export const Sidebar = () => (
    <Drawer
        variant="permanent"
        sx={{
            display: { xs: 'none', md: 'block' },
            width: 280,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: 280,
                boxSizing: 'border-box',
                top: theme.typography.pxToRem(64),
            },
        }}
    >
        <Typography variant="h6">Sidebar</Typography>
    </Drawer>
);
