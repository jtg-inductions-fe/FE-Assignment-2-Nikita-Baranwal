import { useState } from 'react';

export const UserAvatarMenuHandler = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleAvatarClick = (
        event: React.MouseEvent<HTMLElement>,
        showPopover: boolean,
    ) => {
        if (showPopover) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return {
        anchorEl,
        handleAvatarClick,
        handleMenuClose,
        isOpen: Boolean(anchorEl),
    };
};
