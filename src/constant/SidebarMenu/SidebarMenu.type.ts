/**
 * Represents a single sidebar menu item.
 */
export type SidebarMenuItem = {
    id: string;
    title: string;

    /**
     * Optional icon component to be displayed alongside the title.
     */
    icon?: React.ElementType;

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
    badgeColor?:
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
        | 'default'
        | undefined;

    /**
     * Optional array of child menu items (for nested menus).
     */
    children?: SidebarMenuItem[];
};

/**
 * Represents a 2D array of grouped sidebar menu items.
 */
export type SidebarMenu = SidebarMenuItem[][];

/**
 * Represents the items shown in the footer section of the sidebar.
 */
export type SidebarFooterMenu = SidebarMenuItem[];
