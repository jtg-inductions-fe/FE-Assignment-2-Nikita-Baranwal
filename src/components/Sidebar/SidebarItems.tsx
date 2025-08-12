import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { sidebarMenu } from '@constant/SidebarMenu/SidebarMenu';

import { SidebarItem } from './SidebarItem/SidebarItem';

const SidebarItemRenderer = ({
    items,
}: {
    items: (typeof sidebarMenu)[number];
}) => {
    const location = useLocation();

    return (
        <>
            {items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                    <SidebarItem
                        key={item.id}
                        id={item.id}
                        icon={Icon && <Icon />}
                        label={item.title}
                        isActive={isActive}
                        to={item.path}
                        badge={
                            item.badge?.count !== undefined
                                ? {
                                      count: item.badge.count,
                                      color: item.badge.color,
                                  }
                                : undefined
                        }
                    >
                        {item.children && (
                            <SidebarItemRenderer items={item.children} />
                        )}
                    </SidebarItem>
                );
            })}
        </>
    );
};

export const SidebarItems = () => (
    <>
        {sidebarMenu.map((menu, index) => (
            <Box key={index}>
                <SidebarItemRenderer items={menu} />
                {index < sidebarMenu.length - 1 && <Divider />}
            </Box>
        ))}
    </>
);
