import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.PRIMARY.MAIN,
    },
    secondary: {
        main: COLORS.SECONDARY[500],
        light: COLORS.SECONDARY[100],
        dark: COLORS.SECONDARY[700],
    },
    success: {
        main: COLORS.SUCCESS.MAIN,
    },
    warning: {
        main: COLORS.WARNING.MAIN,
    },
    info: {
        main: COLORS.INFO.MAIN,
    },
    background: {
        default: COLORS.SECONDARY[50],
        paper: COLORS.SECONDARY[100],
    },
    text: {
        primary: COLORS.SECONDARY[900],
        secondary: COLORS.SECONDARY[500],
    },
};
