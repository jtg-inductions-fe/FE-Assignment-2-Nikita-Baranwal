import { Box, styled } from '@mui/material';

import { INFOCARDLIST_HEIGHT } from '@constant/common.constant';

export const DataCardContainer = styled(Box)(({ theme }) => {
    const {
        typography: { pxToRem },
        mixins,
    } = theme;

    return {
        ...mixins.flex('center', 'flex-start', 'column'),
        borderRadius: pxToRem(16),
        gap: pxToRem(16),
        padding: `${pxToRem(24)} 0`,
    };
});

export const DataCardItems = styled(Box)(({ theme }) => {
    const {
        typography: { pxToRem },
        palette,
        mixins,
        spacing,
    } = theme;

    return {
        ...mixins.flex('center', 'center', 'column'),
        width: '100%',
        maxHeight: pxToRem(INFOCARDLIST_HEIGHT),
        overflowY: 'auto',
        paddingTop: pxToRem(120),
        scrollbarWidth: 'thin',
        paddingInline: pxToRem(24),
        scrollbarColor: `${palette.grey[400]} ${palette.grey[100]}`,
        '&::-webkit-scrollbar': { width: spacing(1) },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: palette.grey[400],
            borderRadius: spacing(1),
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: palette.grey[100],
        },
    };
});

export const DataCardItem = styled(Box)(({ theme }) => {
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

export const DataCardDetails = styled(Box)(({ theme }) => {
    const {
        mixins,
        typography: { pxToRem },
    } = theme;
    return {
        ...mixins.flex(),
        gap: pxToRem(12),
    };
});

export const DataCardValue = styled(Box)(({ theme }) => {
    const { mixins, palette } = theme;
    return {
        ...mixins.flex(),
        color: palette.grey[900],
    };
});
