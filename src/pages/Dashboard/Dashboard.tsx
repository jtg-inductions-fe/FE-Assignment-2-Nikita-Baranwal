import { itemData } from 'data/ImageGrid/ImageGrid';
import { salesGraphData } from 'data/SalesGraph/SalesGraph';

import { Box } from '@mui/material';

import { SalesGraph } from '@components/SalesGraph';
import { ImageGridContainer } from '@container/ImageGrid/ImageGrid.container';

export const Dashboard = () => (
    <Box display="flex" flexDirection="column" gap={3}>
        <ImageGridContainer data={itemData} />
        <SalesGraph data={salesGraphData} />
    </Box>
);
