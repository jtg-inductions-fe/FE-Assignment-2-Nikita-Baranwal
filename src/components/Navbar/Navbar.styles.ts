import { SxProps, Theme } from '@mui/material';

export const appBarSx: SxProps<Theme> = {
    zIndex: (theme) => theme.zIndex.drawer + 1,
    height: '64px',
    backgroundColor: 'white',
};

export const logoSx: SxProps<Theme> = {
    flexGrow: 1,
};

export const avatarSx: SxProps<Theme> = {
    marginLeft: 2,
};

export const searchBoxSx: SxProps<Theme> = {
    paddingLeft: 2,
};

export const menuIconSx: SxProps<Theme> = {
    marginRight: 2,
};
