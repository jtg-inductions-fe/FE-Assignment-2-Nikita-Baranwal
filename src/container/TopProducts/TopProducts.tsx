import { topProductsData } from 'data/TopProducts/TopProducts';

import { DataCard } from '@components/DataCard';

export const TopProducts = () => (
    <DataCard title="Top Products" data={topProductsData} />
);
