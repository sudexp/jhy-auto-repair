/* eslint-disable max-lines */
import '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: {
      main: CSS.Properties['color'];
    };
    typography: {
      light: CSS.Properties['color'];
      dark: CSS.Properties['color'];
    };
  }

  interface PaletteOptions {
    tertiary: {
      main: CSS.Properties['color'];
    };
    typography: {
      light: CSS.Properties['color'];
      dark: CSS.Properties['color'];
    };
  }

  interface SimplePaletteColorOptions {
    primary?: CSS.Properties['color'];
    secondary?: CSS.Properties['color'];
    tertiary?: CSS.Properties['color'];
    typography?: CSS.Properties['color'];
    red?: CSS.Properties['color'];
  }

  interface TypographyVariants {
    p1: React.CSSProperties;
    p2: React.CSSProperties;
    p3: React.CSSProperties;
    p1b: React.CSSProperties;
    p2b: React.CSSProperties;
    p3b: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    p1?: React.CSSProperties;
    p2?: React.CSSProperties;
    p3?: React.CSSProperties;
    p1b?: React.CSSProperties;
    p2b?: React.CSSProperties;
    p3b?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    p1: true;
    p2: true;
    p3: true;
    p1b: true;
    p2b: true;
    p3b: true;
  }
}
