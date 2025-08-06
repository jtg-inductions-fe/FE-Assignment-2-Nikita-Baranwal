import { ReactNode } from 'react';

export type SidebarItemProps = {
    icon?: ReactNode;
    label: string;
    to?: string;
    badgeCount?: number;
    badgeColor?: string;
    children?: ReactNode;
    isActive?: boolean;
};
