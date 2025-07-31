import type { SvgIconComponent } from '@mui/icons-material';

export type SidebarItem = {
    title?: string;
    icon: SvgIconComponent;
    badgeCount?: number;
    children?: SidebarItem[];
};

export type SidebarItemType = {
    title?: string;
    icon: React.ElementType;
    badgeCount?: number;
    children?: SidebarItemType[];
};

export type SidebarItemProps = {
    item: SidebarItemType;
    depth?: number;
};
