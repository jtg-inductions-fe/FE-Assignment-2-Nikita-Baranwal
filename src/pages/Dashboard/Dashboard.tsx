import { itemData } from 'data/ImageGrid/ImageGrid';
import { salesGraphData } from 'data/SalesGraph/SalesGraph';

import { Box, useMediaQuery } from '@mui/material';

import { SalesGraph } from '@components/SalesGraph';
import { ImageGridContainer } from '@container/ImageGrid/ImageGrid.container';
import { LatestCustomers } from '@container/LatestCustomers';
import { TopProducts } from '@container/TopProducts';
import { theme } from '@theme/index';

export const Dashboard = () => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box display="flex" flexDirection="column" gap={6} width="100%">
            <ImageGridContainer data={itemData} />
            <SalesGraph data={salesGraphData} />

            <Box
                display="flex"
                flexDirection={isSmallScreen ? 'column' : 'row'}
                gap={4}
                width="100%"
            >
                <Box flex={isSmallScreen ? '1 1 100%' : '0 0 30%'}>
                    <LatestCustomers />
                </Box>
                <Box flex={isSmallScreen ? '1 1 100%' : '0 0 70%'}>
                    <TopProducts />
                </Box>
            </Box>
        </Box>
    );
};
