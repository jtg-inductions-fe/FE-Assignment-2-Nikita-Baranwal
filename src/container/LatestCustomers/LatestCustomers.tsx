import { DataCard } from '@components/DataCard';
import { latestCustomersData } from '@data/LatestCustomers';

export const LatestCustomers = () => (
    <DataCard title="Latest Customers" data={latestCustomersData} />
);
