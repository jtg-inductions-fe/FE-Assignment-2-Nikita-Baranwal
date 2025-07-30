import { AppBar } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

// Styled AppBar with light grey background
export const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor: grey[300],
}));
