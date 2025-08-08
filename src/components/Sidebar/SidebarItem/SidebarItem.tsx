import { useState } from 'react';

import { Link } from 'react-router-dom';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
    Collapse,
    List,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';

import { StyledBadge, StyledListItemButton } from './SidebarItem.styles';
import { SidebarItemProps } from './SidebarItem.types';

export const SidebarItem = ({
    icon,
    label,
    children,
    badgeCount,
    isActive,
    to,
    badgeColor,
}: SidebarItemProps) => {
    const hasChildren = Boolean(children);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (hasChildren) {
            setOpen((prev) => !prev);
        }
    };
    return (
        <>
            <StyledListItemButton
                onClick={handleClick}
                selected={isActive}
                {...(!hasChildren && to
                    ? {
                          component: Link,
                          to: to,
                      }
                    : {})}
            >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                    primary={<Typography variant="h4">{label}</Typography>}
                />
                {badgeCount !== undefined && (
                    <StyledBadge badgeContent={badgeCount} color={badgeColor} />
                )}
                {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
            </StyledListItemButton>

            {hasChildren && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div">{children}</List>
                </Collapse>
            )}
        </>
    );
};
