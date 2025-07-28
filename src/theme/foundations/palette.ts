import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.PRIMARY.MAIN,
    },
    secondary: {
        main: COLORS.GREY[500],
        light: COLORS.GREY[100],
        dark: COLORS.GREY[700],
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
        default: COLORS.GREY[50],
        paper: COLORS.GREY[100],
    },
    text: {
        primary: COLORS.GREY[900],
        secondary: COLORS.GREY[500],
    },
};
