import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
Main content area with padding and top margin to offset fixed navbar
**/

export const MainContent = styled(Box)(({ theme }) => {
    const {
        spacing,
        typography: { pxToRem },
    } = theme;

    return {
        flexGrow: 1,
        padding: spacing(3),
        marginTop: pxToRem(64),
    };
});
