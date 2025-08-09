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
        boxShadow:
            '0px 1px 3px rgba(0, 0, 0, 0.10), 0px 1px 2px rgba(0, 0, 0, 0.06)',
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
        gap: pxToRem(8),
        width: '100%',
        maxHeight: INFOCARDLIST_HEIGHT,
        overflowY: 'auto',
        paddingTop: pxToRem(200),
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    };
});
