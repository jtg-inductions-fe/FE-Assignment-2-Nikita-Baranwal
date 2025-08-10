import { ReactNode } from 'react';

/**
 * Props for the generic InfoCardList component.
 *
 * @template T - The type of each item in the data array.
 */
export type InfoCardListProps<T> = {
    id: number;

    /**
     * The title displayed at the top of the card list.
     */
    title: string;

    /**
     * The array of data items to render in the list.
     */
    data: T[];

    /**
     * Function that renders each item in the list.
     *
     * @param item - The current item in the data array.
     * @param index - The index of the current item.
     * @returns A React node to be rendered.
     */
    renderItem: (item: T, index: number) => ReactNode;
};
