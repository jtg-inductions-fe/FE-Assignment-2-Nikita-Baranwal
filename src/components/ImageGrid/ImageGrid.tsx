import { Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { getCols, getRows } from './ImageGrid.helpers';
import { ImageGridListProps } from './ImageGrid.type';

export const ImageGrid = ({ data }: ImageGridListProps) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const imagesToShow = isSmallScreen ? data.slice(0, 3) : data;
    const variant = isSmallScreen ? 'standard' : 'quilted';
    const cols = isSmallScreen ? 1 : 3;
    const rowHeight = isSmallScreen ? 140 : 200;

    return (
        <ImageList
            sx={{ width: '100%', height: 'auto' }}
            variant={variant}
            cols={cols}
            rowHeight={rowHeight}
            gap={8}
        >
            {imagesToShow.map((item, index) => (
                <ImageListItem
                    sx={{ width: '100%' }}
                    key={item.title}
                    cols={getCols(index)}
                    rows={getRows(index, isSmallScreen)}
                >
                    <Box
                        component="img"
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};
