import {
    Box,
    inputAdornmentClasses,
    inputBaseClasses,
    outlinedInputClasses,
    styled,
} from '@mui/material';

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
        paddingTop: pxToRem(210),
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

        [`& .${inputBaseClasses.input}`]: {
            paddingRight: 0,
        },
        [`& .${inputAdornmentClasses.positionEnd}`]: {
            marginLeft: '4px',
        },
        [`& .${outlinedInputClasses.notchedOutline}`]: {
            border: 'none',
            paddingRight: 0,
        },
        [`& .${outlinedInputClasses.input}`]: {
            display: 'flex',
            justifyItems: 'flex-end',
            border: 'none',
        },
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
