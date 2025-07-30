import { useState } from 'react';

import { UserData } from 'data/UserData/UserData';
import type { User } from 'data/UserData/UserData.types';
import { useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Menu,
    TextField,
    Toolbar,
    Typography,
} from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

import avatar from '@assets/images/Avatar.png';
import logo from '@assets/images/Logo.png';
import { useNavbar } from '@container';

import { appBarSx, avatarSx, logoSx, menuIconSx } from './Navbar.styles';
import { TopProductsData } from '../../data/TopProducts/TopProducts';
import { Sidebar } from '../Sidebar/Sidebar';

export const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { anchorEl, handleAvatarClick, handleMenuClose } = useNavbar();

    const [user] = useState<User | null>(UserData[0]);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    const goToNotFound = () => {
        void navigate('*');
    };

    return (
        <>
            <AppBar position="static" sx={appBarSx}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        height: '64px',
                    }}
                >
                    {/* Left: Menu or Logo */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '32px',
                        }}
                    >
                        {isMobile ? (
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer}
                                sx={menuIconSx}
                            >
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <Box
                                component="img"
                                src={logo}
                                alt="Logo"
                                sx={logoSx}
                            />
                        )}

                        {/* Center: Searchbar (only on large screens) */}

                        {!isMobile && (
                            <Autocomplete
                                freeSolo
                                options={TopProductsData}
                                getOptionLabel={(option) =>
                                    typeof option === 'string'
                                        ? option
                                        : option.name
                                }
                                onChange={(
                                    _,
                                    value: { name: string } | string | null, // also account for string
                                ) => {
                                    if (value && typeof value !== 'string') {
                                        const route = `/product/${value.name
                                            .toLowerCase()
                                            .replace(/\s+/g, '-')}`;
                                        void navigate(route);
                                    }
                                }}
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        placeholder="Search…"
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            backgroundColor: 'white',
                                            borderRadius: 2,
                                        }}
                                        InputProps={{
                                            ...params.InputProps,
                                            startAdornment: (
                                                <>
                                                    <SearchIcon
                                                        sx={{
                                                            color: 'white',
                                                            mr: 1,
                                                        }}
                                                    />
                                                    {
                                                        params.InputProps
                                                            .startAdornment
                                                    }
                                                </>
                                            ),
                                        }}
                                    />
                                )}
                                renderOption={(props, option) => (
                                    <Box component="li" {...props}>
                                        {typeof option === 'string'
                                            ? option
                                            : option.name}
                                    </Box>
                                )}
                            />
                        )}
                    </Box>

                    {/* Right: Notifications and Avatar */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton color="inherit" onClick={goToNotFound}>
                            <NotificationsIcon />
                        </IconButton>

                        <IconButton onClick={handleAvatarClick}>
                            <Avatar
                                src={avatar}
                                alt="User Avatar"
                                sx={avatarSx}
                            />
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
                            <Box sx={{ px: 2, py: 1 }}>
                                <Typography variant="h3">
                                    {user?.name || 'No Name'}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {user?.email || 'No Email'}
                                </Typography>
                            </Box>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Sidebar Drawer for Mobile */}
            <Sidebar open={drawerOpen} onClose={toggleDrawer} />
        </>
    );
};
