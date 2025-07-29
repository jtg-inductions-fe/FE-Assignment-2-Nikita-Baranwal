// import { NavbarProps } from '../components/Navbar/Navbar.types';

// export const useTopNav = (props: NavbarProps) => {
//     const { title = 'Navbar' } = props;

//     return {
//         title,
//     };
// };

// components/Navbar/Navbar.container.ts

import { useState } from 'react';

export const useNavbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return { anchorEl, handleAvatarClick, handleMenuClose };
};
