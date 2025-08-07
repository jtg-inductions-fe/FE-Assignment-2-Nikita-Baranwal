import { Box, useMediaQuery, useTheme } from '@mui/material';

import { SidebarContentStyles, StyledDrawer } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';
import { SidebarFooter } from './SidebarFooter';
import { SidebarItems } from './SidebarItems';

export const Sidebar = ({ open, onClose }: SidebarProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <StyledDrawer
            variant={isMobile ? 'temporary' : 'permanent'}
            open={isMobile ? open : true}
            onClose={onClose}
            anchor="left"
            ModalProps={{ keepMounted: true }}
        >
            <SidebarContentStyles>
                <Box
                    flexGrow={1}
                    style={{ overflowY: 'auto' }}
                    width="100%"
                    p={2}
                >
                    <SidebarItems />
                </Box>
                <SidebarFooter />
            </SidebarContentStyles>
        </StyledDrawer>
    );
};
