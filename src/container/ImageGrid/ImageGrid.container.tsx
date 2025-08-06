import { imageLayout } from 'data/ImageGrid/ImageGrid';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ImageGrid } from '@components/ImageGrid/ImageGrid';

import { ImageItemProps } from './ImageGrid.type';

export const ImageGridContainer = ({ data }: ImageItemProps) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const layout = isSmallScreen ? imageLayout.XS : imageLayout.SM;
    const imagesToShow = isSmallScreen ? data.slice(0, 3) : data;
    const cols = isSmallScreen ? 1 : 3;
    const rowHeight = isSmallScreen ? 140 : 200;
    const variant = isSmallScreen ? 'standard' : 'quilted';

    return (
        <ImageGrid
            data={imagesToShow}
            layout={layout}
            variant={variant}
            cols={cols}
            rowHeight={rowHeight}
        />
    );
};
