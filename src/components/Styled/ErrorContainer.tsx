import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ErrorContainer = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
}));
