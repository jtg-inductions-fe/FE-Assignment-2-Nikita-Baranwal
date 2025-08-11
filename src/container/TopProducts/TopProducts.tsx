import { topProductsData } from 'data/TopProducts/TopProducts';

import { InfoCardList } from '@components/InfoCardList';

export const TopProducts = () => (
    <InfoCardList title="Top Products" data={topProductsData} />
);
