import { useState } from 'react';

import { Link } from 'react-router-dom';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
    Badge,
    List,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';

import { StyledCollapse, StyledListItemButton } from './SidebarItem.styles';
import { SidebarItemProps } from './SidebarItem.types';

export const SidebarItem = ({
    icon,
    label,
    children,
    badge,
    isActive,
    to,
    id,
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
                aria-haspopup={hasChildren ? 'true' : undefined}
                aria-expanded={hasChildren ? open : undefined}
                aria-controls={hasChildren ? id : undefined}
                {...(!hasChildren && to
                    ? {
                          component: Link,
                          to: to,
                          'aria-current': isActive ? 'page' : undefined,
                      }
                    : {})}
            >
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText
                    primary={
                        <Typography variant="h4" color="inherit" noWrap>
                            {label}
                        </Typography>
                    }
                />
                {badge?.count !== undefined && (
                    <Badge
                        sx={{ marginRight: '10px' }}
                        badgeContent={badge?.count}
                        color={badge?.color}
                    />
                )}
                {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
            </StyledListItemButton>

            {hasChildren && (
                <StyledCollapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding id={id}>
                        {children}
                    </List>
                </StyledCollapse>
            )}
        </>
    );
};
