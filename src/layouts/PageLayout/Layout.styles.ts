import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppContainer = styled(Box)(({ theme }) => {
    const { mixins } = theme;
    return {
        ...mixins.flex('center', 'center', 'column'),
    };
});

export const MainContent = styled(Box)(({ theme }) => {
    const { mixins, spacing, typography } = theme;
    const { pxToRem } = typography;
    return {
        ...mixins.flex('center', 'center', 'column'),
        padding: spacing(3),
        marginTop: pxToRem(64),
    };
});

export const ContentWrapper = styled(Box)(({ theme }) => {
    const { mixins } = theme;
    return {
        width: 'auto',
        ...mixins.flex('row'),
    };
});
