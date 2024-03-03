/* eslint-disable max-lines */
import { createTheme } from '@mui/material/styles';

import { bgColors, redColors, typographyColors } from './colors';

const theme = createTheme({
  spacing: 8, // = default
  breakpoints: {
    values: {
      xs: 0,
      sm: 620, // default 600
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightBold: 600,
  },
  palette: {
    action: {
      disabledBackground: 'none',
      disabled: 'none',
    },
    background: {
      default: bgColors.light,
    },
    primary: {
      main: redColors.dark,
    },
    secondary: {
      main: redColors.light,
    },
    tertiary: {
      main: bgColors.dark,
    },
    typography: {
      light: typographyColors.light,
      dark: typographyColors.dark,
    },
  },
});

theme.typography.h1 = {
  fontSize: 64,
  fontWeight: 400,
  lineHeight: '70px',
  [theme.breakpoints.down('md')]: {
    fontSize: 36,
    lineHeight: '42px',
  },
};

theme.typography.h2 = {
  fontSize: 32,
  fontWeight: 400,
  lineHeight: '38px',
  [theme.breakpoints.down('md')]: {
    fontSize: 24,
    lineHeight: '30px',
  },
};

theme.typography.p1 = {
  fontSize: 22,
  [theme.breakpoints.down('md')]: {
    fontSize: 20,
  },
};

theme.typography.p1b = {
  fontSize: 22,
  fontWeight: 600,
  [theme.breakpoints.down('md')]: {
    fontSize: 20,
  },
};

theme.typography.p2 = {
  fontSize: 20,
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
};

theme.typography.p2b = {
  fontSize: 20,
  fontWeight: 600,
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
};

theme.typography.p3 = {
  fontSize: 16,
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
  },
};

theme.typography.p3b = {
  fontSize: 16,
  fontWeight: 600,
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
  },
};

export default theme;
