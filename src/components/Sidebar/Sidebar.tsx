import {
    Box,
    Divider,
    Drawer,
    List,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { SidebarProps } from './Sidebar.types';
import { SidebarItem } from './SidebarItem';
import { sidebarFooterItems, sidebarItems } from './SidebarMenu';

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
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <List component="nav" sx={{ flexGrow: 1 }}>
                    {sidebarItems.map((item) => (
                        <SidebarItem key={item.title} item={item} />
                    ))}
                </List>

                <Divider />

                <List sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                    {sidebarFooterItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Icon
                                key={index}
                                sx={{ mx: 1, cursor: 'pointer' }}
                            />
                        );
                    })}
                </List>
            </Box>
        </StyledDrawer>
    );
};
