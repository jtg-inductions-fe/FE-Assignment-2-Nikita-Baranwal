import { AppBar, Box, IconButton, TextField, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

import { NAVBAR_HEIGHT } from '@constant/common.constant';

export const StyledAppBar = styled(AppBar)(({ theme }) => {
    const {
        typography: { pxToRem },
        zIndex,
        palette,
    } = theme;
    return {
        backgroundColor: palette.common.white,
        zIndex: zIndex.drawer + 1,
        height: pxToRem(NAVBAR_HEIGHT),
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
        border: `1px solid ${palette.grey[50]}`,
        '& .MuiOutlinedInput-root': {
            borderRadius: pxToRem(16),
            '& fieldset': {
                borderColor: palette.divider,
            },
            '&:hover fieldset': {
                borderColor: palette.grey[500],
            },
            '&.Mui-focused fieldset': {
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

export const LeftBox = styled(Box)(({ theme }) => {
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
        spacing,
    } = theme;
    return {
        marginRight: spacing(2),
        color: palette.grey[900],
        margin: 0,
        padding: 0,
        fontSize: pxToRem(30),
    };
});

export const StyledLogo = styled('img')(({ theme }) => {
    const {
        typography: { pxToRem },
    } = theme;
    return {
        height: pxToRem(40),
        width: 'auto',
        cursor: 'pointer',
    };
});

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
