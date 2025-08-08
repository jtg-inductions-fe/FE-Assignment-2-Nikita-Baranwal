import { Box, styled } from '@mui/material';

export const StyledFooterItems = styled(Box)(({ theme }) => {
    const {
        typography: { pxToRem },
        mixins,
    } = theme;

    return {
        ...mixins.flex(),
        marginTop: pxToRem(10),
        gap: pxToRem(10),
    };
});
