import { Box, Drawer, drawerClasses, styled } from '@mui/material';

import { NAVBAR_HEIGHT, SIDEBAR_WIDTH } from '@constant/common.constant';

export const StyledDrawer = styled(Drawer)(({ theme }) => {
    const {
        typography: { pxToRem },
        palette,
        spacing,
    } = theme;

    return {
        display: 'block',

        [`& .${drawerClasses.paper}`]: {
            backgroundColor: palette.background.default,
            width: pxToRem(SIDEBAR_WIDTH),
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflowY: 'auto',
            position: 'relative',
            padding: spacing(2),

            [theme.breakpoints.down('md')]: {
                marginTop: pxToRem(NAVBAR_HEIGHT),
            },

            scrollbarColor: `${palette.grey[400]} ${palette.grey[100]}`,
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': { width: spacing(8) },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: palette.grey[400],
                borderRadius: spacing(4),
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: palette.grey[100],
            },
        },
    };
});

export const SidebarContentStyles = styled(Box)(({ theme }) => {
    const { mixins } = theme;

    return {
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        ...mixins.flex('space-between', 'center', 'column'),
    };
});
