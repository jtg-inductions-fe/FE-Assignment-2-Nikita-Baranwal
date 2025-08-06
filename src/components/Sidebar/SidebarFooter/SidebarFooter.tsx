import { SidebarFooterMenu } from 'constant/SidebarMenu/SidebarMenu';
import { useNavigate } from 'react-router-dom';

import { IconButton, Stack } from '@mui/material';

export const SidebarFooter = () => {
    const navigate = useNavigate();

    return (
        <Stack
            direction="row"
            width={'100%'}
            justifyContent="space-around"
            py={2}
        >
            {SidebarFooterMenu.map((item, index) => {
                const Icon = item.icon;
                return (
                    <IconButton
                        sx={{ color: 'black' }}
                        key={index}
                        onClick={() => void navigate(item.path)}
                    >
                        <Icon />
                    </IconButton>
                );
            })}
        </Stack>
    );
};
