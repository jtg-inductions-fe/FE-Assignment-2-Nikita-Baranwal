import { createTheme } from '@mui/material/styles';

import { SCALING_FACTOR } from '@constant';

import { components } from './components';
import { breakpoints, mixins, palette, typography } from './foundations';

/* Step 1: Create base theme with just enough for pxToRem */
let theme = createTheme({
    palette,
    breakpoints,
    mixins,
    typography: {
        fontFamily: 'Inter',
        ...typography.typographyUtil,
    },
    spacing: (factor: number) =>
        theme.typography.pxToRem(factor * SCALING_FACTOR),
});

/* Step 2: Extend theme with full typography + component overrides */
theme = createTheme(theme, {
    typography: {
        ...typography.typographyStyle(theme),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    ...typography.typographyStyle(theme).button,
                    textTransform: 'none',
                },
            },
        },
        ...components, // optional: merge your other custom components
    },
});

export { theme };
