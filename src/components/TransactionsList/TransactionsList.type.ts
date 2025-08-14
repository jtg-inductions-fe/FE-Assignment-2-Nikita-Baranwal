import { TableColumn } from '@container/Transactions/Transactions.type';

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
