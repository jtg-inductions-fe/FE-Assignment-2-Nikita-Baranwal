import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {
    Box,
    Divider,
    Drawer,
    List,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { drawerStyles, sidebarContentStyles } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';
import { SidebarTile } from './SidebarItem/SidebarItem';

export const Sidebar = ({ open, onClose }: SidebarProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const drawerList = (
        <Box sx={sidebarContentStyles}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                    (text, index) => (
                        <SidebarTile
                            key={text}
                            icon={
                                index % 2 === 0 ? <InboxIcon /> : <MailIcon />
                            }
                            label={text}
                        />
                    ),
                )}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <SidebarTile
                        key={text}
                        icon={index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        label={text}
                    />
                ))}
            </List>
        </Box>
    );

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
