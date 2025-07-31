import { SxProps, Theme } from '@mui/material';

export const StyledDrawer = styled(Drawer)(
    ({
        theme: {
            breakpoints,
            typography: { pxToRem },
        },
    }) => ({
        display: 'none',

        [breakpoints.up('md')]: {
            display: 'block',
        },

        width: pxToRem(SIDEBAR_WIDTH),
        flexShrink: 0,

        [`& .${drawerClasses.paper}`]: {
            width: pxToRem(280),
            boxSizing: 'border-box',
            top: pxToRem(64),
        },
    }),
);
