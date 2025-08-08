import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { sidebarMenu } from '@constant/SidebarMenu/SidebarMenu';

import { SidebarItem } from './SidebarItem/SidebarItem';

const RenderSidebarItems = ({
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
                        icon={Icon && <Icon />}
                        label={item.title}
                        isActive={isActive}
                        to={item.path}
                        badge={
                            item.badgeCount !== undefined
                                ? {
                                      count: item.badgeCount,
                                      color: item.badgeColor,
                                  }
                                : undefined
                        }
                    >
                        {item.children && (
                            <RenderSidebarItems items={item.children} />
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
                <RenderSidebarItems items={menu} />
                {index < sidebarMenu.length - 1 && <Divider />}
            </Box>
        ))}
    </>
);
