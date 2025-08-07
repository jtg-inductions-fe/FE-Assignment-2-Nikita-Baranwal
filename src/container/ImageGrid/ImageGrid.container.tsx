import { imageLayout } from 'data/ImageGrid/ImageGrid';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ImageGrid } from '@components/ImageGrid';
import { GALLERY_IMAGE_SM, GALLERY_IMAGE_XS } from '@constant/common.constant';

import { ImageItemProps } from './ImageGrid.type';

export const ImageGridContainer = ({ data }: ImageItemProps) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const layout = isSmallScreen ? imageLayout.XS : imageLayout.SM;
    const imagesData = isSmallScreen ? data.slice(0, 3) : data;
    const cols = isSmallScreen ? 1 : 3;
    const rowHeight = isSmallScreen ? GALLERY_IMAGE_XS : GALLERY_IMAGE_SM;

    return (
        <ImageGrid
            data={imagesData}
            layout={layout}
            cols={cols}
            rowHeight={rowHeight}
        />
    );
};
