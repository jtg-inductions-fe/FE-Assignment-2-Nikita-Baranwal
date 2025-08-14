import { Box, styled, Table, TableCell, TableContainer } from '@mui/material';

import {
    OVERVIEW_HEIGHT,
    TRANSACTIONS_HEIGHT,
} from '@constant/common.constant';

export const TransactionsTableContainer = styled(TableContainer)(({
    theme,
}) => {
    const {
        typography: { pxToRem },
        palette,
        spacing,
    } = theme;

    return {
        padding: pxToRem(24),
        borderRadius: pxToRem(16),
        maxHeight: pxToRem(TRANSACTIONS_HEIGHT),
        position: 'relative',
        overflowY: 'auto',
        paddingTop: 0,
        backgroundColor: palette.common.white,
        scrollbarWidth: 'thin',
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

export const TransactionsTableOverview = styled(Box)(({ theme }) => {
    const {
        typography: { pxToRem },
        mixins,
        palette,
    } = theme;

    return {
        ...mixins.flex('center', 'flex-start', 'column'),
        position: 'sticky',
        top: 0,
        boxSizing: 'border-box',
        backgroundColor: palette.common.white,
        height: pxToRem(OVERVIEW_HEIGHT),
        paddingTop: pxToRem(50),
        paddingBottom: pxToRem(36),
    };
});

export const TransactionsTable = styled(Table)(({ theme }) => {
    const {
        palette,
        typography: { pxToRem },
    } = theme;

    return {
        '& thead th': {
            backgroundColor: palette.grey[100],
            position: 'sticky',
            top: pxToRem(OVERVIEW_HEIGHT),
        },

        '& tbody tr:nth-of-type(even)': {
            backgroundColor: palette.grey[100],
        },
    };
});

export const RoundedTableCell = styled(TableCell, {
    shouldForwardProp: (prop) => prop !== 'rounded',
})<{ rounded?: 'left' | 'right' }>(({ rounded, theme }) => ({
    border: 'none',
    ...(rounded === 'left' && {
        borderTopLeftRadius: theme.typography.pxToRem(12),
        borderBottomLeftRadius: theme.typography.pxToRem(12),
    }),
    ...(rounded === 'right' && {
        borderTopRightRadius: theme.typography.pxToRem(12),
        borderBottomRightRadius: theme.typography.pxToRem(12),
    }),
}));
