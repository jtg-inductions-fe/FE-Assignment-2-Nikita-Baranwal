import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItemIcon, ListItemText } from '@mui/material';

import { StyledListItemButton } from './SidebarItem.styles';
import { SidebarTileProps } from './SidebarItem.types';

export const SidebarTile = ({ icon, label, children }: SidebarTileProps) => {
    const hasChildren = Boolean(children);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (hasChildren) {
            setOpen((prev) => !prev);
        } else {
            void navigate('*');
        }
    };

    return (
        <>
            <StyledListItemButton onClick={handleClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
                {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
            </StyledListItemButton>

            {hasChildren && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {children}
                    </List>
                </Collapse>
            )}
        </>
    );
};
