import type { CSSProperties } from 'react';

declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        /**
         * Creates a flexbox style object with customizable alignment and direction.
         */
        flex: (
            justifyContent?: CSSProperties['justifyContent'],
            alignItems?: CSSProperties['alignItems'],
            flexDirection?: CSSProperties['flexDirection'],
        ) => CSSProperties;

        /**
         * Applies a line-clamp style to truncate text after a specified number of lines.
         */
        lineClamp: (lines: number) => CSSProperties;
    }
}
