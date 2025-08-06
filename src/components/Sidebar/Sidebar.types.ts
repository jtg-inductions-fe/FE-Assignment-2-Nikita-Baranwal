/**
 *  SidebarProps defines the properties for the Sidebar component.
 */
export type SidebarProps = {
    open: boolean;
    onClose?: (event: React.KeyboardEvent | React.MouseEvent) => void;
};
