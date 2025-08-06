import { Box, Drawer, useMediaQuery, useTheme } from '@mui/material';

import { drawerStyles, sidebarContentStyles } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';
import { SidebarFooter } from './SidebarFooter/SidebarFooter';
import { SidebarItems } from './SidebarItems';

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
            <Box sx={drawerStyles}>
                <Box sx={sidebarContentStyles}>
                    <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                        <SidebarItems />
                    </Box>
                    <SidebarFooter />
                </Box>
            </Box>
        </Drawer>
    );
};
