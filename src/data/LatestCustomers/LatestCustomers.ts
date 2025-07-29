import customerFive from '@assets/images/customers/customer-five.png';
import customerFour from '@assets/images/customers/customer-four.png';
import customerOne from '@assets/images/customers/customer-one.png';
import customerSix from '@assets/images/customers/customer-six.png';
import customerThree from '@assets/images/customers/customer-three.png';
import customerTwo from '@assets/images/customers/customer-two.png';

import type { LatestCustomer } from './LatestCustomers.types';

export const latestCustomersData: LatestCustomer[] = [
    {
        name: 'Neil Sims',
        email: 'email@example.com',
        amount: 367,
        avatarUrl: customerOne,
    },
    {
        name: 'Bonnie Green',
        email: 'email@example.com',
        amount: 67,
        avatarUrl: customerTwo,
    },
    {
        name: 'Micheal Gough',
        email: 'email@example.com',
        amount: 3467,
        avatarUrl: customerThree,
    },
    {
        name: 'Thomas Lean',
        email: 'email@example.com',
        amount: 2367,
        avatarUrl: customerFour,
    },
    {
        name: 'Lana Byrd',
        email: 'email@example.com',
        amount: 367,
        avatarUrl: customerFive,
    },
    {
        name: 'Karen Nelson',
        email: 'email@example.com',
        amount: 1367,
        avatarUrl: customerSix,
    },
];
