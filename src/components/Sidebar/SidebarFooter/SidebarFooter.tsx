import { useNavigate } from 'react-router-dom';

import { IconButton } from '@mui/material';

import { SidebarFooterProps } from './SidebarFooter.type';

export const SidebarFooter = ({ icon: Icon, to }: SidebarFooterProps) => {
    const navigate = useNavigate();

    return (
        <IconButton
            color="inherit"
            aria-label={`Navigate to ${to}`}
            onClick={() => void navigate(to)}
        >
            <Icon />
        </IconButton>
    );
};
