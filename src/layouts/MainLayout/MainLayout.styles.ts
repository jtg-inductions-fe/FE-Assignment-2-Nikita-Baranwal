import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppContainer = styled(Box)(({ theme }) => {
    const { mixins } = theme;

    return {
        ...mixins.flex('center', 'center', 'column'),
        height: '100vh',
        overflow: 'hidden',
    };
});

export const MainContent = styled(Box)(({ theme }) => {
    const { mixins, spacing } = theme;
    return {
        ...mixins.flex('flex-start', 'flex-start', 'column'),
        padding: spacing(3),
        height: '100%',
        overflowY: 'auto',
        width: '100%',
    };
});

export const ContentWrapper = styled(Box)(({ theme }) => {
    const { mixins } = theme;
    return {
        width: '100%',
        ...mixins.flex('flex-start', 'flex-start', 'row'),
        flexGrow: '1',
        overflow: 'hidden',
        height: '10vh',
    };
});
