import { SxProps, Theme } from '@mui/material';

export const appBarSx: SxProps<Theme> = (theme) => {
    const { zIndex, typography } = theme;
    const { pxToRem } = typography;

    return {
        zIndex: zIndex.drawer + 1,
        height: pxToRem(64),
        backgroundColor: 'grey',
    };
};

export const logoSx: SxProps<Theme> = {
    height: 35,
    width: 'auto',
};

export const avatarSx: SxProps<Theme> = (theme) => {
    const { pxToRem } = theme.typography;

    return {
        height: pxToRem(35),
        width: 'auto',
        marginLeft: 0,
        padding: 0,
    };
};

export const searchBoxSx: SxProps<Theme> = (theme) => {
    const { spacing } = theme;

    return {
        paddingLeft: spacing(1),
    };
};

export const menuIconSx: SxProps<Theme> = {
    marginRight: 0,
    marginLeft: 0,
};
