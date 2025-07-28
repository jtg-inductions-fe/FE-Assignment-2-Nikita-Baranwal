import { CSSProperties } from 'react';

declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        flex: (
            justifyContent?: CSSProperties['justifyContent'],
            alignItems?: CSSProperties['alignItems'],
            flexDirection?: CSSProperties['flexDirection'],
        ) => CSSProperties;

        lineClamp: (lines: number) => CSSProperties;
    }
}
