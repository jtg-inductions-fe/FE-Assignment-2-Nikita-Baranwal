import { useNavigate } from 'react-router-dom';

import { IconButton } from '@mui/material';

import { sidebarFooterMenu } from '@constant/SidebarMenu/SidebarMenu';

import { StyledFooterItems } from './SidebarFooter.styles';

export const SidebarFooter = () => {
    const navigate = useNavigate();

    return (
        <StyledFooterItems>
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
        </StyledFooterItems>
    );
};
