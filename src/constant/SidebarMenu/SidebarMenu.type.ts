import { ElementType } from 'react';

import { BadgeProps } from '@mui/material';

/**
 * Represents a single sidebar menu item.
 */
export type SidebarMenuItem = {
    id: string;
    title: string;

    /**
     * Optional icon component to be displayed alongside the title.
     */
    icon?: ElementType;

    /**
     * The navigation path associated with the menu item.
     */
    path: string;

    /**
     * Optional number to display as a badge (e.g., notification count).
     */
    badgeCount?: number;

    /**
     * Optional color of the badge.
     * Must be one of the predefined Material UI color types.
     */
    badgeColor?: BadgeProps['color'];

    /**
     * Optional array of child menu items (for nested menus).
     */
    children?: SidebarMenuItem[];
};

/**
 * Represents a 2D array of grouped sidebar menu items.
 */
export type SidebarMenu = SidebarMenuItem[][];
