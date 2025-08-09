import customerFive from '@assets/images/customer-five.png';
import customerFour from '@assets/images/customer-four.png';
import customerOne from '@assets/images/customer-one.png';
import customerSix from '@assets/images/customer-six.png';
import customerThree from '@assets/images/customer-three.png';
import customerTwo from '@assets/images/customer-two.png';

import type { LatestCustomer } from './LatestCustomers.types';

/**
 * Array of latest customer data entries to be displayed in the dashboard.
 * Each customer object includes name, email, purchase amount, and avatar image.
 */
export const latestCustomersData: LatestCustomer[] = [
    {
        id: 1,
        name: 'Neil Sims',
        email: 'email@example.com',
        amount: 367,
        avatarUrl: customerOne,
    },
    {
        id: 2,
        name: 'Bonnie Green',
        email: 'email@example.com',
        amount: 67,
        avatarUrl: customerTwo,
    },
    {
        id: 3,
        name: 'Micheal Gough',
        email: 'email@example.com',
        amount: 3467,
        avatarUrl: customerThree,
    },
    {
        id: 4,
        name: 'Thomas Lean',
        email: 'email@example.com',
        amount: 2367,
        avatarUrl: customerFour,
    },
    {
        id: 5,
        name: 'Lana Byrd',
        email: 'email@example.com',
        amount: 367,
        avatarUrl: customerFive,
    },
    {
        id: 6,
        name: 'Karen Nelson',
        email: 'email@example.com',
        amount: 1367,
        avatarUrl: customerSix,
    },
    {
        id: 7,
        name: 'Thomas Lean',
        email: 'email@example.com',
        amount: 2367,
        avatarUrl: customerFour,
    },
    {
        id: 8,
        name: 'Lana Byrd',
        email: 'email@example.com',
        amount: 367,
        avatarUrl: customerFive,
    },
    {
        id: 9,
        name: 'Karen Nelson',
        email: 'email@example.com',
        amount: 1367,
        avatarUrl: customerSix,
    },
];
