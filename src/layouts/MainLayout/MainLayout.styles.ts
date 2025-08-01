import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';


export const AppContainer = styled(Box)(({ theme }) => {
    const { mixins } = theme;

    return {
        ...mixins.flex('center', 'center', 'column'),
    };
});

export const MainContent = styled(Box)(({ theme }) => {
    const { mixins, spacing } = theme;
    return {
        ...mixins.flex('flex-start', 'center', 'column'),
        padding: spacing(3),
    };
});