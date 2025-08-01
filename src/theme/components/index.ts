import type { Components } from '@mui/material/styles';

import { interFonts } from '@assets/fonts/inter';

// Create an array of Inter font variations with corresponding font weights
const interFontFaces = [
    { weight: 400, font: interFonts.regular },
    { weight: 500, font: interFonts.medium },
    { weight: 600, font: interFonts.semibold },
    { weight: 700, font: interFonts.bold },
];

// Define global component overrides
export const components: Components = {
    MuiCssBaseline: {
        // Apply global styles using MUI's CssBaseline
        styleOverrides: `
      ${interFontFaces
          // Dynamically generate @font-face rules for each Inter font weight
          .map(
              ({ weight, font }) => `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: ${weight};              
          font-display: swap;                 // Ensures fallback font is shown while custom font loads
          src: url(${font.woff2}) format('woff2'), 
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
