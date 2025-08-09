import { topProductsData } from 'data/TopProducts/TopProducts';

import { Box, Typography } from '@mui/material';

import { InfoCardList } from '@components/ListCard';

export const TopProducts = () => (
    <InfoCardList
        title="Top Products"
        data={topProductsData}
        renderItem={(products) => (
            <>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                    key={products.id}
                >
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h3">{products.name}</Typography>
                        <Typography variant="caption">
                            {products.techStack}
                        </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" gap={1}>
                        <Typography variant="h3">{products.sales}</Typography>
                        <Typography variant="caption">sales</Typography>
                    </Box>
                </Box>
            </>
        )}
    />
);
