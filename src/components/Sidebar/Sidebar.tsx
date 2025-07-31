import {
    Box,
    Drawer,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { drawerStyles, sidebarContentStyles } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({ open, onClose }: SidebarProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Drawer
            variant={isMobile ? 'temporary' : 'permanent'}
            open={isMobile ? open : true}
            onClose={onClose}
            anchor="left"
            ModalProps={{ keepMounted: true }}
            sx={drawerStyles}
        >
            <Box sx={sidebarContentStyles}>
                <Typography variant="h6">Sidebar</Typography>
            </Box>
        </Drawer>
    );
};
