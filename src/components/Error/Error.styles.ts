import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ErrorContainer = styled(Box)(({ theme }) => {
    const { typography, mixins, palette, breakpoints } = theme;

    return {
        minHeight: typography.pxToRem(507),
        margin: 'auto',
        ...mixins.flex('center', 'center', 'column'),
        backgroundColor: palette.background.default,
        textAlign: 'center',
        gap: typography.pxToRem(16),
        maxWidth: typography.pxToRem(360),

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

export const ErrorContainerOverview = styled(Box)(({ theme }) => {
    const { mixins, palette, typography } = theme;

    return {
        ...mixins.flex('center', 'center', 'column'),
        backgroundColor: palette.background.default,
        textAlign: 'center',
        gap: typography.pxToRem(22),
        padding: typography.pxToRem(16),
    };
});

export const ErrorContainerOverviewTitle = styled(Box)(({ theme }) => {
    const { mixins, palette, typography } = theme;

    return {
        ...mixins.flex('center', 'center', 'column'),
        backgroundColor: palette.background.default,
        textAlign: 'center',
        gap: typography.pxToRem(10),
    };
});

export const ErrorImage = styled('img')(({ theme }) => {
    const { typography, breakpoints } = theme;

    return {
        maxWidth: typography.pxToRem(360),
        height: 'auto',
        width: '100%',

        [breakpoints.up('lg')]: {
            maxWidth: typography.pxToRem(500),
        },
    };
});
