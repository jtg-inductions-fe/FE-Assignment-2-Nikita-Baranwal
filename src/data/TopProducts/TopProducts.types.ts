/**
 *  TopProducts defines the properties for a products object that represents the top products.
 */
export type TopProduct = {
    readonly id: number;
    name: string;
    description: string;
    sales: number;
    endAdornment: string;
};
