import { grey } from '@mui/material/colors';
import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.PRIMARY.MAIN,
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
        default: grey[50],
        paper: grey[100],
    },
    text: {
        primary: grey[900],
        secondary: grey[500],
    },
};
