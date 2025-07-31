import { useState } from 'react';

export const useNavbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    return {
        drawerOpen,
        toggleDrawer,
    };
};
