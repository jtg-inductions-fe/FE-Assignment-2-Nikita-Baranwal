import type { SvgIconComponent } from '@mui/icons-material';

export type SidebarItem = {
    title?: string;
    icon: SvgIconComponent;
    badgeCount?: number;
    children?: SidebarItem[];
};
