import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';

import { useNavbar } from '@container';

import {
    appBarSx,
    avatarSx,
    logoSx,
    menuIconSx,
    searchBoxSx,
} from './Navbar.styles';

export const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { anchorEl, handleAvatarClick, handleMenuClose } = useNavbar();

    return (
        <AppBar position="static" sx={appBarSx}>
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '64px',
                }}
            >
                {/* Left: Menu or Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {isMobile ? (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={menuIconSx}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Typography variant="h6" noWrap sx={logoSx}>
                            Navbar
                        </Typography>
                    )}
                </Box>

                {/* Center: Searchbar (only on large screens) */}
                {!isMobile && (
                    <Box sx={searchBoxSx}>
                        <InputBase
                            placeholder="Search…"
                            sx={{
                                backgroundColor: 'white',
                                paddingLeft: 2,
                                borderRadius: 2,
                                width: '100%',
                            }}
                        />
                    </Box>
                )}

                {/* Right: Notifications and Avatar */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton color="inherit">
                        <Badge badgeContent={3} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton onClick={handleAvatarClick}>
                        <Avatar alt="User Avatar" sx={avatarSx} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
