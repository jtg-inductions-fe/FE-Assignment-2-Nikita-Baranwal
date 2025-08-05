import { useEffect, useState } from 'react';

import { topProductsData } from 'data/TopProducts/TopProducts';
import { USER_DATA } from 'data/UserData/UserData';
import { useLocation, useNavigate } from 'react-router-dom';
import { generateProductRoute } from 'utils/routerHelpers';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Box, useMediaQuery, useTheme } from '@mui/material';

import logo from '@assets/images/Logo.png';
import { UserAvatarMenu } from '@components/UserAvatarMenu';
import { NOT_FOUND } from '@constant/common.constant';

import {
    NavigationPanel,
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

    const location = useLocation();
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue('');
    }, [location]);

    const goToNotFound = () => {
        void navigate(NOT_FOUND);
    };

    return (
        <StyledAppBar position="fixed">
            <StyledToolbar>
                <NavigationPanel>
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
                                // console.log(value);
                                if (value && typeof value !== 'string') {
                                    const route = generateProductRoute(
                                        value.name,
                                    );
                                    void navigate(route);
                                } else {
                                    void navigate(NOT_FOUND);
                                }
                            }}
                            sx={{ width: 400 }}
                            renderInput={(params) => (
                                <StyledTextField
                                    {...params}
                                    placeholder="Search…"
                                    variant="outlined"
                                    size="small"
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <>
                                                <SearchIcon
                                                    style={{ color: 'gray' }}
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
                            renderOption={({ key, ...props }, option) => (
                                <Box
                                    component="li"
                                    {...props}
                                    key={key as string}
                                >
                                    {typeof option === 'string'
                                        ? option
                                        : option.name}
                                </Box>
                            )}
                        />
                    )}
                </NavigationPanel>

                <RightBox>
                    <StyledNotificationButton
                        color="inherit"
                        onClick={goToNotFound}
                    >
                        <NotificationsIcon />
                    </StyledNotificationButton>

                    <UserAvatarMenu user={USER_DATA} />
                </RightBox>
            </StyledToolbar>
        </StyledAppBar>
    );
};
