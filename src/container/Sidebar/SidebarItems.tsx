import { SidebarMenu } from 'constant/SidebarMenu/SidebarMenu';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { dividerStyles } from './Sidebar.styles';
import { SidebarItem } from './SidebarItem/SidebarItem';

export const SidebarItems = () => {
    const location = useLocation();

    return (
        <>
            {SidebarMenu.map((group, groupIndex) => (
                <Box key={groupIndex}>
                    {group.map((item, itemIndex) => {
                        const Icon = item.icon;

                        const isOverview =
                            item.title.toLowerCase() === 'overview' &&
                            location.pathname === '/';

                        const isActive =
                            isOverview || location.pathname === item.path;

                        return (
                            <SidebarItem
                                key={`${groupIndex}-${itemIndex}`}
                                icon={Icon && <Icon />}
                                label={item.title}
                                badgeCount={item.badgeCount}
                                isActive={isActive}
                            >
                                {item.children?.map((child, childIndex) => {
                                    const ChildIcon = child.icon;
                                    const isChildActive =
                                        location.pathname === child.path;

                                    return (
                                        <SidebarItem
                                            key={`${groupIndex}-${itemIndex}-${childIndex}`}
                                            label={child.title}
                                            icon={ChildIcon && <ChildIcon />}
                                            isActive={isChildActive}
                                        />
                                    );
                                })}
                            </SidebarItem>
                        );
                    })}
                    {groupIndex < SidebarMenu.length - 1 && (
                        <Divider sx={dividerStyles} />
                    )}
                </Box>
            ))}
        </>
    );
};
