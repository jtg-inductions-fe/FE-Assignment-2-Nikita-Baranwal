import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import { StyledDrawer } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({ open, onClose }: SidebarProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <StyledDrawer
            open={open}
            anchor="left"
            onClose={onClose}
            ModalProps={{ keepMounted: true }}
            variant={isMobile ? 'temporary' : 'permanent'}
        >
            <Box padding={2}>
                <Typography variant="h6">Sidebar</Typography>
            </Box>
        </StyledDrawer>
    );
};
