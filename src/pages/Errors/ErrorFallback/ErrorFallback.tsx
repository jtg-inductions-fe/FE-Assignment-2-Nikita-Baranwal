import { Box, Typography } from '@mui/material';

export const ErrorFallback = () => (
    <Box>
        <Typography variant="h2">Something went wrong.</Typography>
        <Typography variant="body1">
            Please refresh or try again later.
        </Typography>
    </Box>
);
