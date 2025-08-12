import { Box, Divider, useMediaQuery, useTheme } from '@mui/material';

import { sidebarFooterMenu, sidebarMenu } from '@constant/SidebarMenu';

import { SidebarContentStyles, StyledDrawer } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';
import { SidebarFooter } from './SidebarFooter';
import { SidebarItemRenderer } from './SidebarItemRenderer';

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
                <Box flexGrow={1} width="100%" p={2} sx={{ overflowY: 'auto' }}>
                    {sidebarMenu.map((menu, index) => (
                        <Box key={index}>
                            <SidebarItemRenderer items={menu} />
                            {index < sidebarMenu.length - 1 && <Divider />}
                        </Box>
                    ))}
                </Box>

                <Box display="flex" gap={4}>
                    {sidebarFooterMenu.map((item) => (
                        <SidebarFooter
                            key={item.id}
                            icon={item.icon}
                            to={item.path}
                        />
                    ))}
                </Box>
            </SidebarContentStyles>
        </StyledDrawer>
    );
};
