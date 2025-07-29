import { grey } from '@mui/material/colors';
import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constant';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}rem`,
};

/**
 * Creates a typography block with various styles using MUI grey shades
 */
const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: 'Inter',
    htmlFontSize: HTML_FONT_SIZE,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,

    h1: {
        fontSize: typographyUtil.pxToRem(30),
        fontWeight: 700,
        lineHeight: 1.5,
        color: grey[900],

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(48),
            lineHeight: 1.5,
        },
    },

    h2: {
        fontSize: typographyUtil.pxToRem(20),
        fontWeight: 600,
        lineHeight: 1.5,
        color: grey[900],
    },

    h3: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 600,
        lineHeight: 1.5,
        color: grey[900],
    },

    h4: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 500,
        lineHeight: 1.5,
        color: grey[900],
    },

    body1: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 400,
        lineHeight: 1.5,
        color: grey[500],
    },

    body2: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: 400,
        lineHeight: 1.5,
        color: grey[500],
    },

    subtitle1: {
        fontSize: typographyUtil.pxToRem(12),
        fontWeight: 600,
        lineHeight: 1.5,
        color: grey[500],
    },

    subtitle2: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: 600,
        lineHeight: 1.5,
        color: grey[500],
    },

    caption: {
        fontSize: typographyUtil.pxToRem(12),
        fontWeight: 400,
        lineHeight: 1.5,
        color: grey[500],
    },

    button: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: 600,
        lineHeight: 1.5,
        color: '#ffffff',
        padding: `${typographyUtil.pxToRem(9)} ${typographyUtil.pxToRem(17)}`,
        borderRadius: theme.typography.pxToRem(12),
    },
});

export const typography = { typographyStyle, typographyUtil };
