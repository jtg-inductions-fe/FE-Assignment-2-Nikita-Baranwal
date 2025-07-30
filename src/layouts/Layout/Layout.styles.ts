import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
});

export const MainContent = styled(Box)(({ theme }) => ({
    ...theme.mixins.flex('center', 'center', 'column'),
    padding: theme.spacing(3),
    marginTop: theme.typography.pxToRem(64),
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
    width: 'auto',
    ...theme.mixins.flex('row'),
}));
