import { Box, Typography } from '@mui/material';

import { RedirectButton } from '@components/RedirectButton';

export const Dashboard = () => (
    <Box>
        <Typography variant="h1">Dashboard</Typography>
        <Typography variant="body1">Welcome to the dashboard!</Typography>
        <RedirectButton to="/" label="Go back home" />
    </Box>
);
