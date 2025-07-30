import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppContainer = styled(Box)({
    display: 'flex',
});

export const MainContent = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '64px',
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    ...theme.mixins.flex('center', 'center', 'row'),
}));
