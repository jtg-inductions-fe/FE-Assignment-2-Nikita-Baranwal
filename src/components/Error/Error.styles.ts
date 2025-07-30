import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ErrorContainer = styled(Box)(({ theme }) => ({
    minHeight: '507px',
    margin: 'auto',
    ...theme.mixins.flex('center', 'center', 'column'),
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    gap: theme.typography.pxToRem(16),
    maxWidth: theme.typography.pxToRem(360),
    marginTop: '64px',

    [theme.breakpoints.up('sm')]: {
        padding: theme.typography.pxToRem(48),
        maxWidth: theme.typography.pxToRem(728),
    },

    [theme.breakpoints.up('lg')]: {
        minHeight: '681px',
        padding: theme.typography.pxToRem(48),
        maxWidth: theme.typography.pxToRem(1440),
    },
}));

export const ErrorContainerOverview = styled(Box)(({ theme }) => ({
    ...theme.mixins.flex('center', 'center', 'column'),
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    gap: theme.typography.pxToRem(22),
    padding: theme.typography.pxToRem(16),
}));

export const ErrorContainerOverviewTitle = styled(Box)(({ theme }) => ({
    ...theme.mixins.flex('center', 'center', 'column'),
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    gap: theme.typography.pxToRem(10),
}));

export const ErrorImage = styled('img')(({ theme }) => ({
    maxWidth: theme.typography.pxToRem(360),
    height: 'auto',
    width: '100%',

    [theme.breakpoints.up('lg')]: {
        maxWidth: theme.typography.pxToRem(500),
    },
}));
