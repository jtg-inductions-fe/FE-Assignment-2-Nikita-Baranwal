import { useNavigate } from 'react-router-dom';

import { Box, IconButton } from '@mui/material';

import { sidebarFooterMenu } from '@constant/SidebarMenu/SidebarMenu';

export const SidebarFooter = () => {
    const navigate = useNavigate();

    return (
        <Box paddingTop={2}>
            {sidebarFooterMenu.map((item) => {
                const Icon = item.icon;
                return (
                    <IconButton
                        color="inherit"
                        key={item.id}
                        aria-label={`Navigate to ${item.path}`}
                        onClick={() => void navigate(item.path)}
                    >
                        <Icon />
                    </IconButton>
                );
            })}
        </Box>
    );
};
