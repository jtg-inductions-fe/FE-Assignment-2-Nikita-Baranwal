import { useState } from 'react';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { SidebarTileProps } from './SidebarItem.types';

export const SidebarTile = ({ icon, label, children }: SidebarTileProps) => {
    const hasChildren = Boolean(children);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        if (hasChildren) setOpen((prev) => !prev);
    };

    return (
        <>
            <ListItemButton onClick={handleToggle}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
                {hasChildren ? open ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItemButton>

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
