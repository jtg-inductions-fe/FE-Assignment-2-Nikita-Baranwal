import type { JSX } from 'react';

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

    /**Mobile view hide */
    hideOnMobile?: boolean;

    /**
     * Optional custom rendering function for the cell content.
     */
    render: (value: T[keyof T], row: T) => JSX.Element;
};
