/**
 * Represents a single financial transaction.
 */
export type Transaction = {
    /**
     * Unique identifier for the object.*/
    readonly id: string;

    /**
     * Name of the object.*/
    name: string;

    /** Type of the transaction.*/
    type: 'Payment' | 'Refund' | 'Failed';

    /** Date of the transaction in ISO string format.*/
    date: string;

    /** Transaction amount. Can be negative in case of refunds */
    amount: number;

    /** Current status of the transaction */
    status: 'Completed' | 'Cancelled' | 'In progress';
};
