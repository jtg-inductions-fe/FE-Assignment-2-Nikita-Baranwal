import customerFive from '@assets/images/customer-five.png';
import customerFour from '@assets/images/customer-four.png';
import customerOne from '@assets/images/customer-one.png';
import customerSix from '@assets/images/customer-six.png';
import customerThree from '@assets/images/customer-three.png';
import customerTwo from '@assets/images/customer-two.png';

import type { LatestCustomer } from './LatestCustomers.types';

/**
 * Array of latest customer data entries to be displayed in the dashboard.
 * Each customer object includes name, description, purchase count, and avatar image.
 */
export const latestCustomersData: LatestCustomer[] = [
    {
        id: 1,
        name: 'Neil Sims',
        description: 'email@example.com',
        count: 367,
        avatarUrl: customerOne,
        startAdornment: '$',
    },
    {
        id: 2,
        name: 'Bonnie Green',
        description: 'email@example.com',
        count: 67,
        avatarUrl: customerTwo,
        startAdornment: '$',
    },
    {
        id: 3,
        name: 'Micheal Gough',
        description: 'email@example.com',
        count: 3467,
        avatarUrl: customerThree,
        startAdornment: '$',
    },
    {
        id: 4,
        name: 'Thomas Lean',
        description: 'email@example.com',
        count: 2367,
        avatarUrl: customerFour,
        startAdornment: '$',
    },
    {
        id: 5,
        name: 'Lana Byrd',
        description: 'email@example.com',
        count: 367,
        avatarUrl: customerFive,
        startAdornment: '$',
    },
    {
        id: 6,
        name: 'Karen Nelson',
        description: 'email@example.com',
        count: 1367,
        avatarUrl: customerSix,
        startAdornment: '$',
    },
    {
        id: 7,
        name: 'Thomas Lean',
        description: 'email@example.com',
        count: 2367,
        avatarUrl: customerFour,
        startAdornment: '$',
    },
    {
        id: 8,
        name: 'Lana Byrd',
        description: 'email@example.com',
        count: 367,
        avatarUrl: customerFive,
        startAdornment: '$',
    },
    {
        id: 9,
        name: 'Karen Nelson',
        description: 'email@example.com',
        count: 1367,
        avatarUrl: customerSix,
        startAdornment: '$',
    },
];
