/**
 * Props for the SidebarFooter component.
 */
export type SidebarFooterProps = {
    id: string;

    /**
     * Icon component to display in the footer.
     */
    icon: React.ElementType;

    /**
     * Path to navigate to when the icon is clicked.
     */
    to: string;
};
