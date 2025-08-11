import { Transaction } from './Transactions.types';

/**
 * Mock data representing a list of financial transactions.
 * Each transaction includes metadata such as type, status, and amount.
 */
export const transactionsData: Transaction[] = [
    {
        id: '1',
        name: 'Bonnie Green',
        type: 'Payment',
        date: '2021-04-23',
        amount: 2300,
        status: 'Completed',
    },
    {
        id: '2',
        name: 'Bonnie Green',
        type: 'Refund',
        date: '2021-04-23',
        amount: -670,
        status: 'Completed',
    },
    {
        id: '3',
        name: 'Jese Leos',
        type: 'Failed',
        date: '2021-04-18',
        amount: 234,
        status: 'Cancelled',
    },
    {
        id: '4',
        name: 'Bonnie Green',
        type: 'Payment',
        date: '2021-04-15',
        amount: 5000,
        status: 'In progress',
    },
    {
        id: '5',
        name: 'Jese Leos',
        type: 'Payment',
        date: '2021-04-15',
        amount: 2300,
        status: 'In progress',
    },
    {
        id: '6',
        name: 'THEMSBERG LLC',
        type: 'Payment',
        date: '2021-04-11',
        amount: 280,
        status: 'Completed',
    },
    {
        id: '7',
        name: 'Tese Leos',
        type: 'Failed',
        date: '2021-04-18',
        amount: 239,
        status: 'Cancelled',
    },
    {
        id: '8',
        name: 'Jeso Leos',
        type: 'Failed',
        date: '2021-04-18',
        amount: 344,
        status: 'Cancelled',
    },
];
