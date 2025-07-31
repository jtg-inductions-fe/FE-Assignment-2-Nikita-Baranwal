import { useState } from 'react';

export const useUserAvatarMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleAvatarClick = (
        event: React.MouseEvent<HTMLElement>,
        withPopover: boolean,
    ) => {
        if (withPopover) {
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
