import {
    AppBar,
    Box,
    BoxProps,
    IconButton,
    outlinedInputClasses,
    TextField,
    Toolbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { NAVBAR_HEIGHT, Z_INDEX } from '@constant/common.constant';

export const StyledAppBar = styled(AppBar)(({ theme }) => {
    const {
        typography: { pxToRem },
        palette,
    } = theme;
    return {
        backgroundColor: palette.common.white,
        zIndex: Z_INDEX,
        height: pxToRem(NAVBAR_HEIGHT),
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    };
});

export const StyledTextField = styled(TextField)(({ theme }) => {
    const {
        typography: { pxToRem },
        palette,
    } = theme;

    return {
        backgroundColor: palette.background.default,
        borderRadius: pxToRem(16),
        boxShadow:
            '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',

        [`& .${outlinedInputClasses.root}`]: {
            borderRadius: pxToRem(16),

            [`& .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: palette.divider,
            },

            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: palette.grey[500],
            },

            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: palette.grey[500],
                borderWidth: 2,
            },
        },
    };
});

export const StyledToolbar = styled(Toolbar)(({ theme }) => {
    const {
        typography: { pxToRem },
        mixins,
    } = theme;
    return {
        ...mixins.flex('space-between', 'center'),
        height: pxToRem(NAVBAR_HEIGHT),
    };
});

export const NavigationPanel = styled(Box)(({ theme }) => {
    const {
        typography: { pxToRem },
        mixins,
    } = theme;
    return {
        ...mixins.flex('flex-start', 'center'),
        gap: pxToRem(32),
    };
});

export const StyledMenuIconButton = styled(IconButton)(({ theme }) => {
    const {
        typography: { pxToRem },
        palette,
    } = theme;
    return {
        color: palette.grey[900],
        margin: 0,
        padding: 0,
        fontSize: pxToRem(30),
    };
});

export const StyledLogo = styled(Box)<BoxProps & { src: string; alt: string }>(
    ({ theme }) => {
        const {
            typography: { pxToRem },
        } = theme;
        return {
            height: pxToRem(40),
            width: 'auto',
            cursor: 'pointer',
        };
    },
);

export const RightBox = styled(Box)(({ theme }) => {
    const {
        typography: { pxToRem },
        mixins,
    } = theme;
    return {
        ...mixins.flex('flex-start', 'center'),
        gap: pxToRem(8),
    };
});

export const StyledNotificationButton = styled(IconButton)(({ theme }) => {
    const {
        typography: { pxToRem },
        palette,
        spacing,
    } = theme;
    return {
        marginRight: spacing(1),
        color: palette.grey[900],
        fontSize: pxToRem(24),
    };
});
