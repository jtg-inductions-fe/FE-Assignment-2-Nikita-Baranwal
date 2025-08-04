import { Drawer, drawerClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

import { NAVBAR_HEIGHT, SIDEBAR_WIDTH } from '@constant/common.constant';

export const StyledDrawer = styled(Drawer)(({ theme }) => {
    const {
        typography: { pxToRem },
        palette,
    } = theme;

    return {
        display: 'block',
        [`& .${drawerClasses.paper}`]: {
            backgroundColor: palette.background.default,
            width: pxToRem(SIDEBAR_WIDTH),
            top: pxToRem(NAVBAR_HEIGHT),
            width: pxToRem(260),
            boxSizing: 'border-box',
            position: 'static',
            height: '100%',
            overflowY: 'auto',
            // marginTop: pxToRem(64),
        },
    };
});
