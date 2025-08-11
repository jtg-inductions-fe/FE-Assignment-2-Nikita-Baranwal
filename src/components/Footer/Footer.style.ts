import { Box, styled } from '@mui/material';

import { FOOTER_HEIGHT } from '@constant/common.constant';

export const FooterContainer = styled(Box)(({ theme }) => {
    const {
        mixins,
        spacing,
        typography: { pxToRem },
        palette,
    } = theme;

    return {
        ...mixins.flex('space-between'),
        gap: pxToRem(8),
        flexWrap: 'wrap',
        padding: spacing(8),
        borderRadius: pxToRem(16),
        height: FOOTER_HEIGHT,
        boxShadow:
            '0px 1px 3px rgba(0, 0, 0, 0.10), 0px 1px 2px rgba(0, 0, 0, 0.06)',
        marginTop: spacing(4),
        backgroundColor: palette.common.white,
    };
});
