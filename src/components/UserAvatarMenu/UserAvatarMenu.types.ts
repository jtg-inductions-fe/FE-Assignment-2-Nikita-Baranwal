/**
 * UserAvatarMenuProps defines the properties for the User Avatar Menu component.
 */
export type UserAvatarMenuProps = {
    user: {
        name: string;
        email: string;
        avatar: string;
    };
    showPopover?: boolean;
};
