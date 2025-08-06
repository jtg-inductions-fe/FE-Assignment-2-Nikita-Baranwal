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

/**
 * Sidebar navigation menu configuration for the app.
 *
 * Each group in the array represents a section of the sidebar.
 * Each item can have:
 * - `title`: Display name of the menu item
 * - `icon`: Material UI icon component
 * - `path`: URL path to navigate to
 * - `badgeCount` (optional): Badge number to display
 * - `children` (optional): Submenu items
 */
export const sidebarMenu = [
    [
        {
            id: 'overview',
            title: 'Overview',
            icon: DashboardIcon,
            path: '/',
        },
        {
            id: 'pages',
            title: 'Pages',
            icon: AssessmentIcon,
            path: '/pages',
        },
        {
            id: 'sales',
            title: 'Sales',
            icon: NextWeekIcon,
            path: '/sales',
            children: [
                {
                    id: 'product-list',
                    title: 'Product List',
                    path: '/sales/product-list',
                },
                { id: 'billing', title: 'Billing', path: '/sales/billing' },
                { id: 'tittle', title: 'Invoice', path: '/sales/invoice' },
            ],
        },
        {
            id: 'messages',
            title: 'Messages',
            icon: MoveToInboxIcon,
            path: '/messages',
            badgeCount: 1,
            badgeColor: 'warning',
        },
        {
            id: 'authentication',
            title: 'Authentication',
            icon: LockOpenIcon,
            path: '/authentication',
            children: [
                { id: 'login', title: 'Login', path: '/authentication/login' },
                {
                    id: 'register',
                    title: 'Register',
                    path: '/authentication/register',
                },
            ],
        },
    ],
    [
        {
            id: 'docs',
            title: 'Docs',
            icon: DescriptionIcon,
            path: '/description',
        },
        {
            id: 'components',
            title: 'Components',
            icon: BuildIcon,
            path: '/components',
        },
        {
            id: 'help',
            title: 'Help',
            icon: HelpIcon,
            path: '/help',
        },
    ],
];

/**
 * Footer menu configuration for the sidebar.
 *
 * Each item includes:
 * - `icon`: Material UI icon component
 * - `path`: Navigation path
 */
export const SidebarFooterMenu = [
    {
        id: 'settings',
        icon: SettingsIcon,
        path: '/settings',
    },
    {
        id: 'language',
        icon: LanguageIcon,
        path: '/language',
    },
    {
        id: 'tune-icon',
        icon: TuneIcon,
        path: '/tune-icon',
    },
];
