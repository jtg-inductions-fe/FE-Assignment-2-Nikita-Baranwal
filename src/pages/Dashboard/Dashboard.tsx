import { Box, Typography } from '@mui/material';

import { Button } from '@components/Button';

export const Dashboard = () => (
    <Box>
        <Typography variant="h1">Dashboard</Typography>
        <Typography variant="body1">Welcome to the dashboard!</Typography>
        <Button to="/" text="Go back home" />
    </Box>
);
