import { useState } from 'react';

import { UserData } from 'data/UserData/UserData';

export const useNavbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return {
        anchorEl,
        handleAvatarClick,
        handleMenuClose,
        user: UserData[0],
    };
};
