export type TransactionStatus = 'Completed' | 'Cancelled' | 'In progress';

export type Transaction = {
    readonly id: string;
    name: string;
    type: 'Payment' | 'Refund' | 'Failed';
    date: string;
    amount: number;
    status: TransactionStatus;
};
