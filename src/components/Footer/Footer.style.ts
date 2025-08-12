import { Box, styled } from '@mui/material';

export const FooterContainer = styled(Box)(({ theme }) => {
    const {
        mixins,
        spacing,
        typography: { pxToRem },
        palette,
    } = theme;

    return {
        ...mixins.flex('space-between'),
        flexWrap: 'wrap',
        padding: spacing(8),
        borderRadius: pxToRem(16),
        marginBottom: spacing(4),
        backgroundColor: palette.common.white,
    };
});
