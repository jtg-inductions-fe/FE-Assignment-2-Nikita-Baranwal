import AssessmentIcon from '@mui/icons-material/Assessment';
import BuildIcon from '@mui/icons-material/Build';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import HelpIcon from '@mui/icons-material/Help';
import LanguageIcon from '@mui/icons-material/Language';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import SettingsIcon from '@mui/icons-material/Settings';
import TuneIcon from '@mui/icons-material/Tune';

export const SidebarMenu = [
    [
        {
            title: 'Overview',
            icon: DashboardIcon,
            path: '/',
        },
        {
            title: 'Pages',
            icon: AssessmentIcon,
            path: 'pages',
        },
        {
            title: 'Sales',
            icon: NextWeekIcon,
            path: 'sales',
            children: [
                { title: 'Product List', path: 'sales/product-list' },
                { title: 'Billing', path: 'sales/billing' },
                { title: 'Invoice', path: 'sales/invoice' },
            ],
        },
        {
            title: 'Messages',
            icon: MoveToInboxIcon,
            path: 'messages',
            badgeCount: 1,
        },
        {
            title: 'Authentication',
            icon: LockOpenIcon,
            path: 'authentication',
            children: [
                { title: 'Login', path: 'authentication/login' },
                { title: 'Register', path: 'authentication/overview' },
            ],
        },
    ],
    [
        {
            title: 'Docs',
            icon: DescriptionIcon,
            path: 'description',
        },
        {
            title: 'Components',
            icon: BuildIcon,
            path: 'components',
        },
        {
            title: 'Help',
            icon: HelpIcon,
            path: 'help',
        },
    ],
];

export const SidebarFooterMenu = [
    {
        icon: SettingsIcon,
        path: 'settings',
    },
    {
        icon: LanguageIcon,
        path: 'language',
    },
    {
        icon: TuneIcon,
        path: 'tune-icon',
    },
];
