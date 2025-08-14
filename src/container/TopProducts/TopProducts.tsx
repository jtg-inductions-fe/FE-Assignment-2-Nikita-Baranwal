import { DataCard } from '@components/DataCard';
import { topProductsData } from '@data/TopProducts';

export const TopProducts = () => (
    <DataCard title="Top Products" data={topProductsData} />
);
