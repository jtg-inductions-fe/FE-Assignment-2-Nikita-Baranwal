import {
    Assessment as AssessmentIcon,
    Build as BuildIcon,
    Dashboard as DashboardIcon,
    Description as DescriptionIcon,
    Help as HelpIcon,
    Language as LanguageIcon,
    ListAlt as ListAltIcon,
    LockOpen as LockOpenIcon,
    MoveToInbox as MoveToInboxIcon,
    NextWeek as NextWeekIcon,
    Receipt as ReceiptIcon,
    Settings as SettingsIcon,
    Tune as TuneIcon,
} from '@mui/icons-material';

import { SidebarItem } from './SidebarMenu.types';

export const sidebarItems: SidebarItem[] = [
    {
        title: 'Overview',
        icon: DashboardIcon,
    },
    {
        title: 'Pages',
        icon: AssessmentIcon,
    },
    {
        title: 'Sales',
        icon: NextWeekIcon,
        children: [
            { title: 'Product List', icon: ListAltIcon },
            { title: 'Billing', icon: ReceiptIcon },
            { title: 'Invoice', icon: ReceiptIcon },
        ],
    },
    {
        title: 'Messages',
        icon: MoveToInboxIcon,
        badgeCount: 1,
    },
    {
        title: 'Authentication',
        icon: LockOpenIcon,
        children: [
            { title: 'Login', icon: LockOpenIcon },
            { title: 'Register', icon: LockOpenIcon },
        ],
    },
    {
        title: 'Docs',
        icon: DescriptionIcon,
    },
    {
        title: 'Components',
        icon: BuildIcon,
    },
    {
        title: 'Help',
        icon: HelpIcon,
    },
];

export const sidebarFooterItems: SidebarItem[] = [
    {
        title: 'Settings',
        icon: SettingsIcon,
    },
    {
        title: 'Language',
        icon: LanguageIcon,
    },
    {
        title: 'Preferences',
        icon: TuneIcon,
    },
];
