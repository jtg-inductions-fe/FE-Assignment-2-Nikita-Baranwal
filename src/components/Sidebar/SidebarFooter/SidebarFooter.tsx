import { useNavigate } from 'react-router-dom';

import { IconButton, Stack } from '@mui/material';

import { SidebarFooterMenu } from '@constant/SidebarMenu/SidebarMenu';

export const SidebarFooter = () => {
    const navigate = useNavigate();

    return (
        <Stack
            direction="row"
            width="100%"
            justifyContent="space-around"
            py={2}
        >
            {SidebarFooterMenu.map((item) => {
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
        </Stack>
    );
};
