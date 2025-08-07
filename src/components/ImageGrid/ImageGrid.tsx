import { Box, ImageList, ImageListItem } from '@mui/material';

import { ImageGridListProps } from './ImageGrid.type';

export const ImageGrid = ({
    data,
    layout,
    variant,
    cols,
    rowHeight,
}: ImageGridListProps) => (
    <ImageList variant={variant} cols={cols} rowHeight={rowHeight} gap={8}>
        {data.map((item, index) => (
            <ImageListItem
                key={item.id}
                cols={layout[index]?.cols}
                rows={layout[index]?.rows}
                sx={{
                    width: '100%',
                    margin: 0,
                    padding: 0,
                }}
            >
                <Box
                    component="img"
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width="100%"
                    height="100%"
                    style={{ objectFit: 'cover' }}
                />
            </ImageListItem>
        ))}
    </ImageList>
);
