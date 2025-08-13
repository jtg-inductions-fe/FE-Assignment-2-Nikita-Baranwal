import { JSX } from '@emotion/react/jsx-runtime';

/**
 * Represents a single transaction entry.
 */
export type Transaction = {
    /** Unique identifier for the transaction */
    id: string;

    /** Name of the person or entity associated with the transaction */
    name: string;

    /** Type of transaction */
    type: 'Payment' | 'Refund' | 'Failed';

    /** Date of the transaction (ISO string format recommended) */
    date: string;

    /** Amount involved in the transaction */
    amount: number;

    /** Current status of the transaction */
    status: 'Completed' | 'In progress' | 'Cancelled';
};

/**
 * Describes the structure of a column in a data table.
 *
 * @template T - The type of data used in the table row.
 */
export type TableColumn<T> = {
    /** The key from the row data that this column corresponds to */
    key: keyof T;

    /** Display label for the column */
    label: string;

    /**
     * Optional alignment of content in the column
     * @default left
     */
    align?: 'left' | 'right' | 'center';

    /**
     * Optional custom render function for cell content.
     *
     * @param value - The value of the cell.
     * @param row - The full row data.
     * @returns React node to be rendered in the cell.
     */
    render: (value: T[keyof T], row: T) => JSX.Element;
};

/**
 * Props for a customizable table component.
 *
 * @template T - The type of row data being displayed.
 */
export type CustomTableProps<T> = {
    /** Table title to display above the table */
    title: string;

    /** Optional subtitle displayed below the title */
    subtitle?: string;

    /** Definitions for how each column in the table should behave/render */
    columns: TableColumn<T>[];

    /** Array of data rows to be rendered in the table */
    rows: T[];
};
