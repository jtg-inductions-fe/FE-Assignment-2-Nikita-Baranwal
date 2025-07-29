export type TransactionStatus = 'Completed' | 'Cancelled' | 'In progress';

export interface Transaction {
    id: string;
    name: string;
    type: 'Payment' | 'Refund' | 'Failed';
    date: string; // ISO format or readable date
    amount: number;
    status: TransactionStatus;
}
