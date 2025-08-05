/**
 * UserAvatarMenuProps defines the properties for the User Avatar Menu component.
 */
export type UserAvatarMenuProps = {
    user: {
        name: string;
        email: string;
        /** User avatar url */
        avatar: string;
    };
    /** Flag to provide support for popover menu in avatar */
    showPopover?: boolean;
};
