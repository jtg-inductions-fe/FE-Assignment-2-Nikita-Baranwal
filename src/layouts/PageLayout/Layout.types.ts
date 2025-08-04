import { ReactNode } from 'react';

export type MainLayoutProps = {
    useSidebar?: boolean;
    children?: ReactNode;
};

export type RouteHandle = {
    handle?: {
        hideSidebar?: boolean;
    };
};
