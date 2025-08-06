import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { NAVBAR_HEIGHT } from '@constant/common.constant';

export const AppContainer = styled(Box)(({ theme }) => {
    const { mixins } = theme;

    return {
        ...mixins.flex('center', 'center', 'column'),
    };
});

export const MainContent = styled(Box)(({ theme }) => {
    const { spacing, typography } = theme;

    return {
        padding: spacing(3),
        marginTop: typography.pxToRem(NAVBAR_HEIGHT),
    };
});
