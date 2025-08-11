import { Box, useMediaQuery, useTheme } from '@mui/material';

import { sidebarFooterMenu } from '@constant/SidebarMenu/SidebarMenu';

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
                <Box display="flex" gap={4}>
                    {sidebarFooterMenu.map((item) => (
                        <SidebarFooter
                            key={item.id}
                            id={item.id}
                            icon={item.icon}
                            to={item.path}
                        />
                    ))}
                </Box>
            </SidebarContentStyles>
        </StyledDrawer>
    );
};
