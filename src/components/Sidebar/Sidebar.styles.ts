import { Drawer, drawerClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledDrawer = styled(Drawer)(({ theme }) => {
    const { typography } = theme;
    const { pxToRem } = typography;

    return {
        display: 'none',

        [theme.breakpoints.up('md')]: {
            display: 'block',
        },

        width: pxToRem(280),
        flexShrink: 0,

        [`& .${drawerClasses.paper}`]: {
            width: pxToRem(280),
            boxSizing: 'border-box',
            top: pxToRem(64),
        },
    };
});
