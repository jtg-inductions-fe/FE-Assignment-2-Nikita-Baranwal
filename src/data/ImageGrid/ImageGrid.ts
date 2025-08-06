import galleryOne from '@assets/images/gallery-image-DDIBMRFo.webp';
import galleryTwo from '@assets/images/gallery-img2-BCyS6bsl.webp';
import galleryThree from '@assets/images/gallery-img3-BzXZ4EI5.webp';
import galleryFour from '@assets/images/gallery-img4-DRB9PTaJ.webp';

import { ImageItem } from './ImageGrid.type';

/**
 * An array of image items used for rendering the image gallery grid.
 */
export const itemData: ImageItem[] = [
    {
        id: 'gallery-one',
        src: galleryOne,
        title: 'gallery-img-one',
    },
    {
        id: 'gallery-two',
        src: galleryTwo,
        title: 'gallery-img-two',
    },
    {
        id: 'gallery-three',
        src: galleryThree,
        title: 'gallery-img-three',
    },
    {
        id: 'gallery-four',
        src: galleryFour,
        title: 'gallery-img-four',
    },
];

/**
 * Defines layout configurations for image grids at different screen sizes.
 *
 * Each layout is an array of objects specifying the number of rows and columns
 * an image should span in the grid.
 *
 * - `XS` is used for extra-small screens.
 * - `SM` is used for small screens and up.
 */
export const imageLayout = {
    /**
     * Layout configuration for extra-small screens.
     * - First image spans 2 rows.
     * - Remaining images span 1 row each.
     */
    XS: [
        { cols: 1, rows: 2 },
        { cols: 1, rows: 1 },
        { cols: 1, rows: 1 },
        { cols: 1, rows: 1 },
    ],

    /**
     * Layout configuration for small screens and larger.
     * - Third image spans 2 rows.
     * - Fourth image spans 2 columns.
     */
    SM: [
        { cols: 1, rows: 1 },
        { cols: 1, rows: 1 },
        { cols: 1, rows: 2 },
        { cols: 2, rows: 1 },
    ],
};
