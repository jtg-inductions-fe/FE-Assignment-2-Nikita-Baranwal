import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { sidebarMenu } from '@constant/SidebarMenu/SidebarMenu';

import { SidebarItem } from './SidebarItem/SidebarItem';

export const SidebarItems = () => {
    const location = useLocation();

    return (
        <>
            {sidebarMenu.map((menu, menuIndex) => (
                <Box key={menuIndex}>
                    {menu.map((item) => {
                        const Icon = item.icon;

                        const isActive = location.pathname === item.path;

                        return (
                            <SidebarItem
                                key={item.id}
                                icon={Icon && <Icon />}
                                label={item.title}
                                badgeCount={item.badgeCount}
                                isActive={isActive}
                                to={item.path}
                                badgeColor={item.badgeColor}
                            >
                                {item.children?.map((child) => {
                                    const isChildActive =
                                        location.pathname === child.path;

                                    return (
                                        <SidebarItem
                                            key={child.id}
                                            label={child.title}
                                            isActive={isChildActive}
                                            to={child.path}
                                        />
                                    );
                                })}
                            </SidebarItem>
                        );
                    })}
                    {menuIndex < sidebarMenu.length - 1 && (
                        <Divider sx={{ py: 2 }} />
                    )}
                </Box>
            ))}
        </>
    );
};
