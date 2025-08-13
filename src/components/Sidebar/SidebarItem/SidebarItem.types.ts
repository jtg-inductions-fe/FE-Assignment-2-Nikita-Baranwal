import { BadgeProps } from '@mui/material';

import { JSX } from '@emotion/react/jsx-runtime';

/**
 * Props for a single sidebar item.
 */
export type SidebarItemProps = {
    /**
     * Icon element to display alongside the label.
     * Example: `<HomeIcon />`
     */
    icon?: JSX.Element;

    /**
     * Text label for the sidebar item.
     */
    label: string;

    /**
     * Path to navigate to when the item is clicked.
     */
    to: string;

    /**
     * Optional badge to display on the sidebar item.
     */
    badge?: {
        /**
         * Number to display in the badge.
         */
        count?: number;

        /**
         * Badge color, using Material UI's `BadgeProps['color']` type.
         */
        color?: BadgeProps['color'];
    };

    /**
     * Optional child element to render inside or below the sidebar item.
     */
    children?: JSX.Element;

    /**
     * Whether this item is currently active.
     */
    isActive?: boolean;

    /**
     * Unique identifier for the sidebar item.
     */
    id: string;
};
