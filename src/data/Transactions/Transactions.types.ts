import { JSX } from 'react';

/**
 * A union type representing all possible transaction statuses.
 * - `'Completed'`: The transaction was successful.
 * - `'Cancelled'`: The transaction was cancelled.
 * - `'In progress'`: The transaction is currently being processed.
 */
export type TransactionStatus = 'Completed' | 'Cancelled' | 'In progress';

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
    status: TransactionStatus;
};

/**
 * Defines the structure of a column used in a data table.
 *
 * @template T - The type of the data rows.
 */
export type TableColumn<T> = {
    /** The key of the field in the data object to display */
    key: keyof T;

    /** Column header label */
    label: string;

    /** Text alignment for the cell.*/
    align?: 'left' | 'right' | 'center';

    /**
     * Optional custom rendering function for the cell content.
     */
    render: (value: T[keyof T], row: T) => JSX.Element;
};

/**
 * Defines the props for the `TransactionsTable` component,
 * which is responsible for rendering a table of transaction data.
 */
export type TransactionsTableProps = {
    /** Optional title to be displayed above the table */
    title: string;

    /** Columns configuration for the table */
    columns: TableColumn<Transaction>[];

    /** The data rows (transactions) to display in the table */
    rows: Transaction[];
};
