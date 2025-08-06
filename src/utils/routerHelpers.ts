export const generateProductRoute = (productName: string) =>
    `/product/${productName.trim().toLowerCase().replace(/\s+/g, '-')}`;
