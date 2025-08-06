import { drawerClasses, SxProps, Theme } from '@mui/material';

import { NAVBAR_HEIGHT, SIDEBAR_WIDTH } from '@constant/common.constant';

export const drawerStyles: SxProps<Theme> = (theme) => {
    const {
        typography: { pxToRem },
        palette,
    } = theme;

    return {
        display: 'block',
        [`& .${drawerClasses.anchorLeft}`]: {
            width: pxToRem(SIDEBAR_WIDTH),
        },
        [`& .${drawerClasses.paper}`]: {
            backgroundColor: palette.background.default,
            width: pxToRem(SIDEBAR_WIDTH),
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflowY: 'auto',
            position: 'relative',
            [theme.breakpoints.down('md')]: {
                marginTop: NAVBAR_HEIGHT,
            },
        },
    };
};

export const sidebarContentStyles: SxProps<Theme> = (theme) => {
    const { spacing, mixins } = theme;

    return {
        height: 'calc(100vh - 64px)',
        padding: spacing(2),
        ...mixins.flex('space-between', 'center', 'column'),
    };
};
