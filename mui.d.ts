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
    display: React.CSSProperties;
    p1: React.CSSProperties;
    p2: React.CSSProperties;
    p3: React.CSSProperties;
    ui1r: React.CSSProperties;
    ui1b: React.CSSProperties;
    ui2r: React.CSSProperties;
    ui2b: React.CSSProperties;
    ui3r: React.CSSProperties;
    ui3b: React.CSSProperties;
    ui4r: React.CSSProperties;
    ui4b: React.CSSProperties;
    ui5r: React.CSSProperties;
    ui5b: React.CSSProperties;
    ui6r: React.CSSProperties;
    ui6b: React.CSSProperties;
    ui7r: React.CSSProperties;
    ui7b: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    display?: React.CSSProperties;
    p1?: React.CSSProperties;
    p2?: React.CSSProperties;
    p3?: React.CSSProperties;
    ui1r?: React.CSSProperties;
    ui1b?: React.CSSProperties;
    ui2r?: React.CSSProperties;
    ui2b?: React.CSSProperties;
    ui3r?: React.CSSProperties;
    ui3b?: React.CSSProperties;
    ui4r?: React.CSSProperties;
    ui4b?: React.CSSProperties;
    ui5r?: React.CSSProperties;
    ui5b?: React.CSSProperties;
    ui6r?: React.CSSProperties;
    ui6b?: React.CSSProperties;
    ui7r?: React.CSSProperties;
    ui7b?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display: true;
    p1: true;
    p2: true;
    p3: true;
    ui1r: true;
    ui1b: true;
    ui2r: true;
    ui2b: true;
    ui3r: true;
    ui3b: true;
    ui4r: true;
    ui4b: true;
    ui5r: true;
    ui5b: true;
    ui6r: true;
    ui6b: true;
    ui7r: true;
    ui7b: true;
  }
}
