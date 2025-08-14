import { useLocation } from 'react-router-dom';

import { sidebarMenu } from '@constant/SidebarMenu';

import { SidebarItem } from './SidebarItem';

export const SidebarItemRenderer = ({
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
