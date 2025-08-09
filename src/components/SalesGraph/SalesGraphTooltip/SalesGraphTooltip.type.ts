/**
 * Props for the SalesGraph tooltip component.
 *
 * @typedef {Object} SalesGraphTooltipProps
 * @property {{ value: number }[]=} payload - Array of payload objects, each containing a numeric value.
 * @property {(string|number)=} label - Label displayed in the tooltip, can be a string or a number.
 */
export type SalesGraphTooltipProps = {
    payload?: { value: number }[];
    label?: string | number;
};
