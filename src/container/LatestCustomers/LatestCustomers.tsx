import { latestCustomersData } from 'data/LatestCustomers/LatestCustomers';

import { InfoCardList } from '@components/InfoCardList';

export const LatestCustomers = () => (
    <InfoCardList title="Latest Customers" data={latestCustomersData} />
);
