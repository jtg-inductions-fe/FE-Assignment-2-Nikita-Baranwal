import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ErrorContainer = styled(Box)(({ theme }) => {
    const { typography, mixins, palette, breakpoints } = theme;

    return {
        minHeight: typography.pxToRem(507),
        ...mixins.flex('center', 'center', 'column'),
        backgroundColor: palette.background.default,
        textAlign: 'center',
        gap: typography.pxToRem(16),
        maxWidth: typography.pxToRem(360),
        marginInline: 'auto',

        [breakpoints.up('sm')]: {
            padding: typography.pxToRem(48),
            maxWidth: typography.pxToRem(728),
        },

        [breakpoints.up('lg')]: {
            minHeight: typography.pxToRem(681),
            padding: typography.pxToRem(48),
            maxWidth: typography.pxToRem(1440),
        },
    };
});

export const SubContainer = styled(Box)(({ theme }) => {
    const { mixins, palette, typography } = theme;

    return {
        ...mixins.flex('center', 'center', 'column'),
        backgroundColor: palette.background.default,
        textAlign: 'center',
        gap: typography.pxToRem(22),
        padding: typography.pxToRem(16),
    };
});

export const ErrorContent = styled(Box)(({ theme }) => {
    const { mixins, palette, typography } = theme;

    return {
        ...mixins.flex('center', 'center', 'column'),
        backgroundColor: palette.background.default,
        textAlign: 'center',
        gap: typography.pxToRem(10),
    };
});

export const ImageContainer = styled(Box)(({ theme }) => {
    const { mixins, typography, breakpoints } = theme;

    return {
        ...mixins.flex(),
        maxWidth: typography.pxToRem(360),

        [breakpoints.up('lg')]: {
            maxWidth: typography.pxToRem(500),
        },

        '& > img': {
            width: '100%',
            height: 'auto',
        },
    };
});
