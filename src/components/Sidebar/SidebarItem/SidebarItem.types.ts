import { ReactNode } from 'react';

import { JSX } from '@emotion/react/jsx-runtime';

export type SidebarItemProps = {
    icon?: JSX.Element;
    label: string;
    to?: string;
    badgeCount?: number;
    badgeColor?: string;
    children?: ReactNode;
    isActive?: boolean;
};
