import { useEffect, useState } from 'react';

import { topProductsData } from 'data/TopProducts/TopProducts';
import { UserData } from 'data/UserData/UserData';
import { useLocation, useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

import avatar from '@assets/images/Avatar.png';
import logo from '@assets/images/Logo.png';
import { UserAvatarMenu } from '@components/UserAvatarMenu';

import {
    LeftBox,
    RightBox,
    StyledAppBar,
    StyledLogo,
    StyledMenuIconButton,
    StyledNotificationButton,
    StyledTextField,
    StyledToolbar,
} from './Navbar.styles';
import { NavbarProps } from './Navbar.types';

export const Navbar = ({ toggleDrawer }: NavbarProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    const [user] = useState(UserData[0]);
    const location = useLocation();
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue('');
    }, [location]);

    const goToNotFound = () => {
        void navigate('/404');
    };

    return (
        <StyledAppBar position="fixed">
            <StyledToolbar>
                <LeftBox>
                    {isMobile ? (
                        <StyledMenuIconButton
                            edge="start"
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </StyledMenuIconButton>
                    ) : (
                        <StyledLogo src={logo} alt="Logo" />
                    )}

                    {!isMobile && (
                        <Autocomplete
                            freeSolo
                            inputValue={inputValue}
                            onInputChange={(_, newInputValue) => {
                                setInputValue(newInputValue);
                            }}
                            options={topProductsData}
                            getOptionLabel={(option) =>
                                typeof option === 'string'
                                    ? option
                                    : option.name
                            }
                            onChange={(_, value) => {
                                if (value && typeof value !== 'string') {
                                    const route = `/product/${value.name.toLowerCase().replace(/\s+/g, '-')}`;
                                    void navigate(route);
                                } else {
                                    void navigate('/404');
                                }
                            }}
                            sx={{ width: 400 }}
                            renderInput={(params) => (
                                <StyledTextField
                                    {...params}
                                    placeholder="Search…"
                                    variant="outlined"
                                    size="small"
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <>
                                                    <SearchIcon
                                                        style={{
                                                            color: 'gray',
                                                        }}
                                                    />
                                                    {
                                                        params.InputProps
                                                            ?.startAdornment
                                                    }
                                                </>
                                            ),
                                        },
                                    }}
                                />
                            )}
                            renderOption={(
                                props: React.HTMLAttributes<HTMLLIElement>,
                                option,
                            ) => (
                                <Box component="li" {...props}>
                                    {typeof option === 'string'
                                        ? option
                                        : option.name}
                                </Box>
                            )}
                        />
                    )}
                </LeftBox>

                <RightBox>
                    <StyledNotificationButton
                        color="inherit"
                        onClick={goToNotFound}
                    >
                        <NotificationsIcon />
                    </StyledNotificationButton>
                    <UserAvatarMenu
                        user={{
                            name: user?.name,
                            email: user?.email,
                            avatarSrc: avatar,
                        }}
                    />
                </RightBox>
            </StyledToolbar>
        </StyledAppBar>
    );
};
