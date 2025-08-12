import {
    Facebook,
    GitHub,
    SportsBasketball,
    Twitter,
} from '@mui/icons-material';

import { SocialIcon } from './Footer.type';

/**
 * List of social media icons with labels, icons and URLs.
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
