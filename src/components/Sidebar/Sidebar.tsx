import { Typography, useMediaQuery, useTheme } from '@mui/material';

import { SidebarContent, StyledDrawer } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({ open, onClose }: SidebarProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <StyledDrawer
            variant={isMobile ? 'temporary' : 'permanent'}
            open={isMobile ? open : true}
            onClose={onClose}
            anchor="left"
            ModalProps={{ keepMounted: false }}
        >
            <SidebarContent>
                <Typography variant="h6">Sidebar</Typography>
            </SidebarContent>
        </StyledDrawer>
    );
};
