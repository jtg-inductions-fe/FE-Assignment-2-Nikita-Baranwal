/**
 * Returns the number of columns an image should span in the grid,
 * based on its index.
 */
export const getCols = (index: number): number => {
    if (index === 3) return 2;
    return 1;
};

/**
 * Returns the number of rows an image should span in the grid.
 * The logic changes based on whether the screen is small or not.
 */
export const getRows = (index: number, isSmall: boolean): number => {
    if (isSmall && index === 0) return 2;
    if (isSmall) return 1;
    if (index === 2) return 2;
    return 1;
};
