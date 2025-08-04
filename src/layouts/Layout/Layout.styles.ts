import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppContainer = styled(Box)(({ theme: { mixins } }) => ({
    ...mixins.flex('center', 'center', 'column'),
}));

export const MainContent = styled(Box)(
    ({ theme: { spacing, typography } }) => ({
        padding: spacing(3),
        marginTop: typography.pxToRem(64),
    }),
);

export const ContentWrapper = styled(Box)(({ theme: { mixins } }) => ({
    width: 'auto',
    ...mixins.flex('row'),
}));
