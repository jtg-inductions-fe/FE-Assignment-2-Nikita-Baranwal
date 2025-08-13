/**
 *  LatestCustomer defines the properties for a customer object that represents the latest customer.
 */
export type LatestCustomer = {
    readonly id: number;
    name: string;
    description: string;
    count: number;
    avatarUrl: string;
    startAdornment: string;
};
