import {
    Facebook,
    GitHub,
    SportsBasketball,
    Twitter,
} from '@mui/icons-material';

import { SocialIcon } from './Footer.type';

/**
 * List of social media icons with labels and URLs.
 * Each entry contains:
 * - `label`: a string describing the social platform,
 * - `Icon`: the SVG icon component imported from MUI icons,
 * - `url`: the target link for the icon.
 *
 * This array is used to render social media buttons in the footer.
 */
export const socialIcons: SocialIcon[] = [
    {
        label: 'Facebook',
        Icon: Facebook,
        url: 'https://facebook.com',
    },
    {
        label: 'Twitter',
        Icon: Twitter,
        url: 'https://twitter.com',
    },
    {
        label: 'GitHub',
        Icon: GitHub,
        url: 'https://github.com',
    },
    {
        label: 'Basketball',
        Icon: SportsBasketball,
        url: '/',
    },
];
