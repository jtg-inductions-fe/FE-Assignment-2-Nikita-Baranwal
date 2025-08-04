export type SidebarProps = {
    open?: boolean;
    onClose?: (
        event: React.KeyboardEvent | React.MouseEvent,
        reason: 'backdropClick' | 'escapeKeyDown',
    ) => void;
};
