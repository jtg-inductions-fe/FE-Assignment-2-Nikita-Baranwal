import { Box, Drawer, useMediaQuery, useTheme } from '@mui/material';

import { drawerStyles, sidebarContentStyles } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';
import { SidebarFooter } from './SidebarFooter/SidebarFooter';
import { SidebarItems } from './SidebarItems';

export const Sidebar = ({ open, onClose }: SidebarProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <StyledDrawer
            open={open}
            anchor="left"
            onClose={onClose}
            ModalProps={{ keepMounted: true }}
            sx={{
                '& .MuiDrawer-paper': {
                    width: 280,
                    height: '93vh',
                    boxSizing: 'border-box',
                    marginTop: '64px',
                },
            }}
        >
            <Box sx={drawerStyles}>
                <Box sx={sidebarContentStyles}>
                    <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                        <SidebarItems />
                    </Box>
                    <SidebarFooter />
                </Box>
            </Box>
        </StyledDrawer>
    );
};
