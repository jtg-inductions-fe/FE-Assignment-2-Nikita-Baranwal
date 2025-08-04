import { ReactNode } from 'react';

export type SidebarTileProps = {
    icon?: ReactNode;
    label?: string;
    badgeCount?: number;
    children?: ReactNode;
    // to?:string;
};
