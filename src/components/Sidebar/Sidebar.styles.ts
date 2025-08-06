import { Box, Drawer, drawerClasses, styled } from '@mui/material';

import { NAVBAR_HEIGHT, SIDEBAR_WIDTH } from '@constant/common.constant';

export const StyledDrawer = styled(Drawer)(({ theme }) => {
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
});

export const SidebarContentStyles = styled(Box)(({ theme }) => {
    const { spacing, mixins } = theme;

    return {
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        padding: spacing(2),
        ...mixins.flex('space-between', 'center', 'column'),
    };
});
