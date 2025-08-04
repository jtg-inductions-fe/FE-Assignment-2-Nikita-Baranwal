import {
    Assessment as AssessmentIcon,
    Build as BuildIcon,
    Dashboard as DashboardIcon,
    Description as DescriptionIcon,
    Help as HelpIcon,
    Language as LanguageIcon,
    LockOpen as LockOpenIcon,
    MoveToInbox as MoveToInboxIcon,
    NextWeek as NextWeekIcon,
    Settings as SettingsIcon,
    Tune as TuneIcon,
} from '@mui/icons-material';

import { SidebarItem } from './SidebarMenu.types';

export const SidebarMenu = [
    [
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
                { title: 'Product List' },
                { title: 'Billing' },
                { title: 'Invoice' },
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
            children: [{ title: 'Login' }, { title: 'Register' }],
        },
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
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
