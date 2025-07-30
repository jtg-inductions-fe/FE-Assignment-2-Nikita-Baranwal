import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MainContent = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.typography.pxToRem(64),
}));
