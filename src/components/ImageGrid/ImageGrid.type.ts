/**
 * Represents a single image item in the image grid.
 */
export type ImageItem = {
    id: string;
    src: string;
    title: string;
};

/**
 * Defines the layout configuration for a single image in the grid.
 */
export type LayoutItem = {
    /** Number of rows the image should span */
    rows: number;

    /** Number of columns the image should span */
    cols: number;
};

/**
 * Maps different screen sizes to their respective grid layout configurations.
 */
export type LayoutMap = {
    /** Layout configuration for extra-small (mobile) screens */
    XS: LayoutItem[];

    /** Layout configuration for small (tablet and above) screens */
    SM: LayoutItem[];
};

/**
 * Props for the ImageGrid component which renders a responsive image gallery.
 */
export type ImageGridListProps = {
    data: ImageItem[];

    /** The layout configuration (based on screen size) for how each image should be positioned */
    layout: LayoutItem[];

    /** The variant of the grid layout – e.g., 'quilted' or 'standard' */
    variant: 'quilted' | 'standard';

    /** Number of columns in the grid */
    cols: number;

    /** Fixed row height used to size images proportionally */
    rowHeight: number;
};
