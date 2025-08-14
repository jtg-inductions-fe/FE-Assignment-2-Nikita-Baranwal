import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constant/index';
import { theme } from '@theme/index';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}rem`,
};

const { pxToRem } = typographyUtil;

/**
 * Creates a typography block with various styles using MUI grey shades
 */
const typographyStyle = ({
    breakpoints,
    palette,
}: Theme): TypographyOptions => ({
    fontFamily: 'Inter',
    htmlFontSize: HTML_FONT_SIZE,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,

    h1: {
        fontSize: pxToRem(30),
        fontWeight: 700,
        lineHeight: 1.5,
        color: palette.grey[900],
        [breakpoints.up('md')]: {
            fontSize: pxToRem(48),
            lineHeight: 1.5,
        },
    },

    h2: {
        fontSize: pxToRem(20),
        fontWeight: 600,
        lineHeight: 1.5,
        color: palette.grey[900],
    },

    h3: {
        fontSize: pxToRem(16),
        fontWeight: 600,
        lineHeight: 1.5,
        color: palette.grey[900],
    },

    h4: {
        fontSize: pxToRem(16),
        fontWeight: 500,
        lineHeight: 1.5,
        color: palette.grey[900],
    },

    body1: {
        fontSize: pxToRem(16),
        fontWeight: 400,
        lineHeight: 1.5,
        color: palette.grey[500],
    },

    body2: {
        fontSize: pxToRem(14),
        fontWeight: 400,
        lineHeight: 1.5,
        color: palette.grey[500],
    },

    subtitle1: {
        fontSize: pxToRem(12),
        fontWeight: 600,
        lineHeight: 1.5,
        color: palette.grey[500],
    },

    subtitle2: {
        fontSize: pxToRem(14),
        fontWeight: 600,
        lineHeight: 1.5,
        color: palette.grey[700],
        textTransform: 'uppercase',

        [theme.breakpoints.down('sm')]: {
            fontSize: pxToRem(12),
            fontWeight: 400,
        },
    },

    caption: {
        fontSize: pxToRem(12),
        fontWeight: 400,
        lineHeight: 1.5,
        color: palette.grey[500],
    },

    button: {
        fontSize: pxToRem(14),
        fontWeight: 600,
        lineHeight: 1.5,
        color: palette.common.white,
        padding: `${pxToRem(9)} ${pxToRem(17)}`,
        borderRadius: pxToRem(12),
    },
});

export const typography = { typographyStyle, typographyUtil };
