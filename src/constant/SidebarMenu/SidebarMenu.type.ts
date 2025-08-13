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
     * Optional badge configuration to display a count with a specific color.
     *
     * @property {number} [count] - The numeric value to display inside the badge (e.g., a notification or message count).
     * @property {BadgeProps['color']} [color] - The color of the badge. Accepts predefined MUI badge colors like 'primary', 'secondary', etc.
     */
    badge?: {
        count?: number;
        color?: BadgeProps['color'];
    };

    /**
     * Optional array of child menu items (for nested menus).
     */
    children?: SidebarMenuItem[];
};

/**
 * Represents a 2D array of grouped sidebar menu items.
 */
export type SidebarMenu = SidebarMenuItem[][];
