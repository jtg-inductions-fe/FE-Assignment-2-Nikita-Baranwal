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
        src: galleryOne,
        title: 'gallery-img-one',
    },
    {
        src: galleryTwo,
        title: 'gallery-img-two',
    },
    {
        src: galleryThree,
        title: 'gallery-img-three',
    },
    {
        src: galleryFour,
        title: 'gallery-img-four',
    },
];
