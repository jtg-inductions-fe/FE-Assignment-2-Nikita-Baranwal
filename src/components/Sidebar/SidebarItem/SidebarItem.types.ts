import { To } from 'react-router-dom';

import { BadgeProps } from '@mui/material';

import { JSX } from '@emotion/react/jsx-runtime';

export type SidebarItemProps = {
    icon?: JSX.Element;
    label: string;
    to?: To;
    badge?: {
        count?: number;
        color?: BadgeProps['color'];
    };
    children?: JSX.Element;
    isActive?: boolean;
    id: string;
};
