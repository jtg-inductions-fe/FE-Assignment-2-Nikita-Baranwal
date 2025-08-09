/**
 * Represents a single data point for the sales graph.
 *
 * @typedef {Object} SalesGraphData
 * @property {string} date - The date associated with the sales amount (formatted as DD-MM).
 * @property {number} amount - The sales amount for the given date.
 */
export type SalesGraphData = {
    date: string;
    amount: number;
};
