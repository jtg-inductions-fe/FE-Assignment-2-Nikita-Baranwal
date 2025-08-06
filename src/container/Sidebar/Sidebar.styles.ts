import { drawerClasses,SxProps, Theme } from '@mui/material';

export const drawerStyles: SxProps<Theme> = (theme) => {
    const {
        typography: { pxToRem },
        palette,
    } = theme;

    return {
        display: 'block',
        [`& .${drawerClasses.anchorLeft}`]: {
            width: pxToRem(260),
        },
        [`& .${drawerClasses.paper}`]: {
            backgroundColor: palette.background.default,
            width: pxToRem(260),
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflowY: 'auto',
            position: 'relative',
            [theme.breakpoints.down('md')]: {
                marginTop: '64px',
            },
        },
    };
};

export const sidebarContentStyles: SxProps<Theme> = (theme) => {
    const { spacing } = theme;

    return {
        height: 'calc(100vh - 64px)',
        padding: spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };
};

export const dividerStyles: SxProps<Theme> = (theme) => {
    const {
        typography: { pxToRem },
    } = theme;

    return {
        py: pxToRem(10),
    };
};
