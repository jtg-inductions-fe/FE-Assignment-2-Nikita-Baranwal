import React, { useState } from 'react'; // <-- import useState

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
    Badge,
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { SidebarItemProps } from './SidebarMenu.types';

export const SidebarItem = ({ item, depth = 0 }: SidebarItemProps) => {
    const [open, setOpen] = useState(false);
    const Icon = item.icon;
    const hasChildren = Boolean(item.children && item.children.length);

    const toggleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <ListItem disablePadding sx={{ pl: 2 + depth * 2 }}>
                <ListItemButton onClick={hasChildren ? toggleOpen : undefined}>
                    <ListItemIcon>
                        <Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                    {item.badgeCount ? (
                        <Badge color="error" badgeContent={item.badgeCount} />
                    ) : null}
                    {hasChildren ? (
                        open ? (
                            <ExpandLess />
                        ) : (
                            <ExpandMore />
                        )
                    ) : null}
                </ListItemButton>
            </ListItem>

            {hasChildren && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        {item.children!.map((child) => (
                            <SidebarItem
                                key={child.title}
                                item={child}
                                depth={depth + 1}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
};
