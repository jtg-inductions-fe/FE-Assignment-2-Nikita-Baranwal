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
                aria-controls={hasChildren ? `${label}-children` : undefined}
                {...(!hasChildren && to
                    ? {
                          component: Link,
                          to: to,
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
                    <List
                        component="div"
                        disablePadding
                        id={`${label}-children`}
                    >
                        {children}
                    </List>
                </StyledCollapse>
            )}
        </>
    );
};
