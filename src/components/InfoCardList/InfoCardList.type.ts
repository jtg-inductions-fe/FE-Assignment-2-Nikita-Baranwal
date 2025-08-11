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
     * Optional email address (used to determine if item represents a customer).
     */
    email?: string;

    /**
     * Optional URL for the avatar image.
     */
    avatarUrl?: string;

    /**
     * Optional monetary value, usually shown with a dollar sign (used for customers).
     */
    amount?: number;

    /**
     * Optional numeric value representing sales count (used for products).
     */
    sales?: number;

    /**
     * Optional tech stack used for a product.
     */
    techStack?: string;
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
