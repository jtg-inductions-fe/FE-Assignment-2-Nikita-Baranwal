/**
 * Represents a single item in the info card list.
 */
export type InfoListCardItemData = {
    /**
     * Unique identifier for the item.
     */
    id: number;

    /**
     * Display name of the person or product.
     */
    name: string;

    /**
     * Optional URL for the avatar image.
     */
    avatarUrl?: string;

    /**
     * Count of amount or sales values.
     */
    count: number;

    /**
     * Optional tech stack used for a product.
     */
    description: string;

    /**
     * Symbol to show before the main value.
     */
    startAdornment?: string;

    /**
     * Text to show after the main value.
     */
    endAdornment?: string;
};

/**
 * Props for the InfoCardList component.
 */
export type InfoListCardProps = {
    /**
     * The title displayed at the top of the card list.
     */
    title: string;

    /**
     * Array of data items to be displayed in the list.
     */
    data: InfoListCardItemData[];
};
