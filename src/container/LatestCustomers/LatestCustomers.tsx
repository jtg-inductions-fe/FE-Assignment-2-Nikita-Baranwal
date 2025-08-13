import { latestCustomersData } from 'data/LatestCustomers/LatestCustomers';

import { DataCard } from '@components/DataCard';

export const LatestCustomers = () => (
    <DataCard title="Latest Customers" data={latestCustomersData} />
);
