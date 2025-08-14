import { transactionsData } from 'data/Transactions/Transactions';

import { TransactionsList } from '@components/TransactionsList';

import { transactionColumns } from './TransactionsColumns';

export const Transactions = () => (
    <TransactionsList
        title="Transactions"
        subtitle="This is a list of latest transactions."
        columns={transactionColumns}
        rows={transactionsData}
    />
);
