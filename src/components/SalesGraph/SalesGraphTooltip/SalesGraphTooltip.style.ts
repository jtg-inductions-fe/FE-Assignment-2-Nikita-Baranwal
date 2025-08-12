import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TooltipContainer = styled(Box)(({ theme }) => {
    const {
        palette,
        typography: { pxToRem },
    } = theme;

    return {
        borderRadius: 8,
        backgroundColor: palette.common.white,
        padding: `${pxToRem(8)} ${pxToRem(18)}`,
        border: 'none',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.10), 0px 1px 2px rgba(0,0,0,0.06)',
        transform: 'translateX(-50%)',
    };
});

export const TooltipLabel = styled(Typography)(({ theme }) => {
    const {
        palette,
        typography: { pxToRem },
    } = theme;

    return {
        color: palette.grey[600],
        fontSize: pxToRem(12),
    };
});

export const SalesRow = styled(Box)(({ theme }) => {
    const {
        typography: { pxToRem },
        mixins,
    } = theme;

    return {
        ...mixins.flex('center', 'center'),
        gap: pxToRem(4),
        marginBottom: pxToRem(8),
    };
});

export const SalesDot = styled(Box)(({ theme }) => {
    const {
        palette,
        typography: { pxToRem },
    } = theme;

    return {
        width: pxToRem(8),
        height: pxToRem(8),
        borderRadius: '50%',
        backgroundColor: palette.primary.main,
    };
});

export const LabelPrefix = styled(Box)(({ theme }) => {
    const { palette } = theme;

    return {
        color: palette.grey[500],
        display: 'inline',
    };
});

export const LabelValue = styled(Box)(({ theme }) => {
    const { palette } = theme;

    return {
        color: palette.grey[900],
        display: 'inline',
    };
});
