import type { Components } from '@mui/material/styles';

import { interFonts } from '@assets/fonts/inter';

const interFontFaces = [
    { weight: 400, font: interFonts.regular },
    { weight: 500, font: interFonts.medium },
    { weight: 600, font: interFonts.semibold },
    { weight: 700, font: interFonts.bold },
];

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: `
      ${interFontFaces
          .map(
              ({ weight, font }) => `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: ${weight};
          font-display: swap;
          src: url(${font.woff2}) format('woff2'),
               url(${font.woff}) format('woff'),
               url(${font.ttf}) format('truetype');
        }
      `,
          )
          .join('\n')}

      html {
        font-size: 62.5%;
      }

      body {
        font-family: 'Inter';
      }
    `,
    },
};
