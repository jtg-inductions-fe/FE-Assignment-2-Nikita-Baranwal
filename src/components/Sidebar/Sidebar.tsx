import { Drawer, Typography } from '@mui/material';

const Sidebar: React.FC = () => (
    <Drawer
        variant="permanent"
        sx={{
            width: 280,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: 280,
                boxSizing: 'border-box',
                top: '64px',
            },
        }}
    >
        <Typography variant="h6">Sidebar</Typography>
    </Drawer>
);

export default Sidebar;
