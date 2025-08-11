import { useNavigate } from 'react-router-dom';

import { IconButton } from '@mui/material';

import { SidebarFooterProps } from './SidebarFooter.type';

export const SidebarFooter = ({ icon: Icon, to, id }: SidebarFooterProps) => {
    const navigate = useNavigate();

    return (
        <IconButton
            color="inherit"
            key={id}
            aria-label={`Navigate to ${to}`}
            onClick={() => void navigate(to)}
        >
            <Icon />
        </IconButton>
    );
};
