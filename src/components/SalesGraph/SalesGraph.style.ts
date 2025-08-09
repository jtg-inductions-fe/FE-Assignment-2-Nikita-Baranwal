import { CartesianGrid, XAxis, YAxis } from 'recharts';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SalesGraphContainer = styled(Box)(({ theme }) => {
    const {
        spacing,
        typography: { pxToRem },
    } = theme;

    return {
        boxShadow:
            '0px 1px 3px rgba(0, 0, 0, 0.10), 0px 1px 2px rgba(0, 0, 0, 0.06)',
        padding: spacing(6),
        borderRadius: pxToRem(12),
        outline: 'none',
        userSelect: 'none',
        marginTop: pxToRem(20),

        '& *': {
            outline: 'none',
        },
    };
});

export const StyledCartesianGrid = styled(CartesianGrid)(({ theme }) => {
    const { palette } = theme;
    return {
        stroke: palette.grey[300],
        strokeWidth: 0.5,
    };
});

export const StyledXAxis = styled(XAxis)(({ theme }) => {
    const {
        typography: { subtitle2 },
        palette,
    } = theme;

    return {
        '& .recharts-cartesian-axis-tick-value': {
            ...subtitle2,
            fill: palette.grey[500],
        },
    };
});

export const StyledYAxis = styled(YAxis)(({ theme }) => {
    const {
        typography: { subtitle2 },
        palette,
    } = theme;

    return {
        '& .recharts-cartesian-axis-tick-value': {
            ...subtitle2,
            fill: palette.grey[500],
        },
    };
});

export const SalesInfo = styled(Box)(({ theme }) => {
    const {
        typography: { pxToRem },
        mixins,
        palette: { grey },
    } = theme;

    return {
        ...mixins.flex('flex-start'),
        padding: `${pxToRem(10)} 0`,
        margin: `${pxToRem(20)} 0`,
        gap: pxToRem(8),
        fontWeight: 700,
        fontSize: pxToRem(20),
        color: grey[900],

        [theme.breakpoints.down('sm')]: {
            padding: 0,
            margin: 0,
        },
    };
});
