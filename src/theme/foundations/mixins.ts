import type {
    CSSProperties,
    MixinsOptions,
} from '@mui/material/styles/createMixins';

/**
 * Creates a CSS block for clamping text to a specified number of lines
 * @param lines - Number of Lines to clamp
 * @returns Returns Line clamp CSS properties
 */
const lineClamp = (lines: number = 1): CSSProperties => ({
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: lines,
});

/**
 * Flex mixin for consistent flexbox layout
 * @param justify - justifyContent value (default: 'center')
 * @param align - alignItems value (default: 'center')
 * @param direction - flexDirection value (default: 'row')
 */
const flex = (
    justify: CSSProperties['justifyContent'] = 'center',
    align: CSSProperties['alignItems'] = 'center',
    direction: CSSProperties['flexDirection'] = 'row',
): CSSProperties => ({
    display: 'flex',
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction,
});

export const mixins: MixinsOptions = {
    lineClamp,
    flex,
};
