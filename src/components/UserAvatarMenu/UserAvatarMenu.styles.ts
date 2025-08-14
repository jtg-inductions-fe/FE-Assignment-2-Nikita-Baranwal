import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAvatar = styled(Avatar)(({ theme }) => {
    const {
        typography: { pxToRem },
    } = theme;
    return {
        width: pxToRem(32),
        height: pxToRem(32),
        cursor: 'pointer',
    };
});
