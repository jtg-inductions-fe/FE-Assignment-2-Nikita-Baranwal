import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Styled AppBar with light grey background
 */
export const StyledAppBar = styled(AppBar)(({ theme }) => {
    const { palette } = theme;
    return {
        backgroundColor: palette.grey[300],
    };
});
