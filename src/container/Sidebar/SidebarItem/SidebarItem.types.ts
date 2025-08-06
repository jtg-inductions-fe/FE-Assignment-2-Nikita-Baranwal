import { ReactNode } from 'react';

export type SidebarTileProps = {
    icon?: ReactNode;
    label: string;
    to?:string;
    badgeCount?: number;
    children?: ReactNode;
    parentPath?: string,
    isActive?: boolean,
};
