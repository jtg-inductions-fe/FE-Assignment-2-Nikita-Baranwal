import { ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => {
    const { palette } = theme;
    return {
        color: palette.grey[900],
        // backgroundColor: 'blue',
    };
});
