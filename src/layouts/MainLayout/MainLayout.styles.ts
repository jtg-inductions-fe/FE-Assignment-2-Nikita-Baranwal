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
    const { mixins, spacing, palette } = theme;
    return {
        ...mixins.flex('flex-start', 'flex-start', 'column'),
        padding: spacing(3),
        height: '100%',
        overflowY: 'auto',
        width: '100%',
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

export const ContentWrapper = styled(Box)(({ theme }) => {
    const { mixins } = theme;
    return {
        width: '100%',
        ...mixins.flex('flex-start', 'flex-start', 'row'),
        flexGrow: '1',
        overflow: 'hidden',
        height: 'calc(100vh - 64px)',
    };
});
