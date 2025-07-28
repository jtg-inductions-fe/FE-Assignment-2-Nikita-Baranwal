// import { palette } from 'theme/foundations/palette';

import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { COLORS, HTML_FONT_SIZE } from '@constant';

// import { palette } from './palette';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units.
     * @param px - The pixel value to convert.
     * @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}` + 'rem',
};

// TODO: Add the necessary typographies here.
/**
 * Creates a typography block with various styles
 * @param theme - Theme object to access the breakpoints.
 * @returns The function returns a TypographyOptions object, which includes various typography settings,
 */
const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: 'Inter',
    htmlFontSize: HTML_FONT_SIZE,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,

    h1: {
        //text 7xl
        fontSize: typographyUtil.pxToRem(30),
        fontWeight: 700,
        lineHeight: 1.5,
        color: COLORS.SECONDARY[900],

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(48),
            lineHeight: 1.5,
        },
    },

    h2: {
        //text 3xl
        fontSize: typographyUtil.pxToRem(20),
        fontWeight: 600,
        lineHeight: 1.5,
        color: COLORS.SECONDARY[900],
    },

    h3: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 600,
        lineHeight: 1.5,
        color: COLORS.SECONDARY[900],
    },

    h4: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 500,
        lineHeight: 1.5,
        color: COLORS.SECONDARY[900],
    },

    body1: {
        //text-base
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 400,
        lineHeight: 1.5,
        color: COLORS.SECONDARY[500],
    },

    body2: {
        //text-sm
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: 400,
        lineHeight: 1.5,
        color: COLORS.SECONDARY[500],
    },

    subtitle1: {
        fontSize: typographyUtil.pxToRem(12),
        fontWeight: 600,
        lineHeight: 1.5,
        color: COLORS.SECONDARY[500],
    },

    subtitle2: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: 600,
        lineHeight: 1.5,
        color: COLORS.SECONDARY[500],
    },

    caption: {
        //text-xs
        fontSize: typographyUtil.pxToRem(12),
        fontWeight: 400,
        lineHeight: 1.5,
        color: COLORS.SECONDARY[500],
    },

    button: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: 600,
        lineHeight: 1.5,
        color: COLORS.SECONDARY[0],
        padding: `${typographyUtil.pxToRem(9)} ${typographyUtil.pxToRem(17)}`,
        borderRadius: theme.typography.pxToRem(12),
    },
});

export const typography = { typographyStyle, typographyUtil };
