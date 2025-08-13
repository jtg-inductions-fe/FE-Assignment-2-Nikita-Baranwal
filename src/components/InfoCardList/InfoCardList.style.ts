import { Box, styled } from '@mui/material';

import { INFOCARDLIST_HEIGHT } from '@constant/common.constant';

export const InfoCardListContainer = styled(Box)(({ theme }) => {
    const {
        typography: { pxToRem },
        mixins,
    } = theme;

    return {
        ...mixins.flex('center', 'flex-start', 'column'),
        borderRadius: pxToRem(16),
        gap: pxToRem(16),
        padding: pxToRem(24),
    };
});

export const InfoCardItems = styled(Box)(({ theme }) => {
    const {
        typography: { pxToRem },
        mixins,
    } = theme;

    return {
        ...mixins.flex('center', 'center', 'column'),
        width: '100%',
        maxHeight: pxToRem(INFOCARDLIST_HEIGHT),
        overflowY: 'auto',
        paddingTop: pxToRem(120),
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    };
});

export const InfoCard = styled(Box)(({ theme }) => {
    const {
        typography: { pxToRem },
        mixins,
    } = theme;

    return {
        ...mixins.flex('space-between'),
        width: '100%',
        alignItems: 'center',
        padding: `${pxToRem(8)} 0`,
    };
});

export const InfoCardDetails = styled(Box)(({ theme }) => {
    const {
        mixins,
        typography: { pxToRem },
    } = theme;
    return {
        ...mixins.flex(),
        gap: pxToRem(12),
    };
});

export const InfoCardValue = styled(Box)(({ theme }) => {
    const { mixins, palette } = theme;
    return {
        ...mixins.flex(),
        color: palette.grey[900],
    };
});
