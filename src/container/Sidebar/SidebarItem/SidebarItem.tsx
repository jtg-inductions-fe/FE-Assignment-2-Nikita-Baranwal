import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
    Badge,
    Collapse,
    List,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { StyledListItemButton } from './SidebarItem.styles';
import { SidebarTileProps } from './SidebarItem.types';

export const SidebarItem = ({
    icon,
    label,
    children,
    badgeCount,
    isActive,
}: SidebarTileProps) => {
    const hasChildren = Boolean(children);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (hasChildren) {
            setOpen((prev) => !prev);
        } else {
            const path = `/${label.toLowerCase().replace(/\s+/g, '-')}`;
            void navigate(path);
        }
    };

    return (
        <>
            <StyledListItemButton onClick={handleClick} selected={isActive}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
                {badgeCount !== undefined && (
                    <Badge badgeContent={badgeCount} color="warning" />
                )}
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
