/* eslint-disable max-lines */
import { createTheme } from '@mui/material/styles';

import { commonColors, redColors, greyColors, blueColors } from './colors';

const INTER_SEMIBOLD = 'Inter Semibold';

const theme = createTheme({
  spacing: 8, // default
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 360,
  //     md: 768,
  //     lg: 1440,
  //     xl: 1920,
  //   },
  // },
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
    common: {
      black: commonColors.black,
      white: commonColors.white,
    },
    primary: {
      main: redColors.dark,
    },
    secondary: {
      main: redColors.light,
    },
    tertiary: {
      main: blueColors.dark,
    },
    greyscale: {
      text: greyColors.text,
      light: greyColors.light,
      dark: greyColors.dark,
    },
  },
});

// typography responsive styles
theme.typography.display = {
  fontSize: 100,
  fontWeight: 400,
  lineHeight: '110px',
  letterSpacing: -5,
  [theme.breakpoints.down('md')]: {
    fontSize: 72,
    lineHeight: '96px',
    letterSpacing: -3.6,
  },
};

theme.typography.h1 = {
  fontSize: 72,
  fontWeight: 400,
  lineHeight: '96px',
  letterSpacing: -3.6,
  [theme.breakpoints.down('md')]: {
    fontSize: 64,
    lineHeight: '88px',
    letterSpacing: -3.2,
  },
};

theme.typography.h2 = {
  fontSize: 64,
  fontWeight: 400,
  lineHeight: '88px',
  letterSpacing: -3.2,
  [theme.breakpoints.down('md')]: {
    fontSize: 48,
    lineHeight: '64px',
    letterSpacing: -2.4,
  },
};

theme.typography.h3 = {
  fontSize: 48,
  fontWeight: 400,
  lineHeight: '64px',
  letterSpacing: -2.4,
  [theme.breakpoints.down('md')]: {
    fontSize: 32,
    lineHeight: '48px',
    letterSpacing: -1.6,
  },
};

theme.typography.h4 = {
  fontSize: 32,
  fontWeight: 400,
  lineHeight: '48px',
  letterSpacing: -1.6,
  [theme.breakpoints.down('md')]: {
    fontSize: 24,
    lineHeight: '32px',
    letterSpacing: -1.2,
  },
};

theme.typography.h5 = {
  fontSize: 28,
  fontWeight: 400,
  lineHeight: '32px',
  letterSpacing: -1.4,
  [theme.breakpoints.down('md')]: {
    fontSize: 20,
    lineHeight: '32px',
    letterSpacing: -1,
  },
};

theme.typography.h6 = {
  fontSize: 20,
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: -1,
  [theme.breakpoints.down('md')]: {
    fontSize: 18,
    lineHeight: '24px',
    letterSpacing: -0.9,
  },
};

theme.typography.p1 = {
  fontSize: 20,
  lineHeight: '32px',
  letterSpacing: -0.6,
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
    lineHeight: '24px',
    letterSpacing: -0.48,
  },
};

theme.typography.p2 = {
  fontSize: 16,
  lineHeight: '24px',
  letterSpacing: -0.48,
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
    lineHeight: '24px',
    letterSpacing: -0.42,
  },
};

theme.typography.p3 = {
  fontSize: 12,
  lineHeight: '16px',
  letterSpacing: -0.36,
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
    lineHeight: '16px',
    letterSpacing: -0.36,
  },
};

theme.typography.ui1r = {
  fontSize: 22,
  lineHeight: '26.4px',
  letterSpacing: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: 20,
    lineHeight: '32px',
    letterSpacing: 0,
  },
};

theme.typography.ui1b = {
  fontFamily: INTER_SEMIBOLD,
  fontSize: 22,
  fontWeight: 600,
  lineHeight: '26.4px',
  letterSpacing: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: 20,
    lineHeight: '32px',
    letterSpacing: 0,
  },
};

theme.typography.ui2r = {
  fontSize: 20,
  lineHeight: '24px',
  letterSpacing: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: 18,
    lineHeight: '24px',
    letterSpacing: 0,
  },
};

theme.typography.ui2b = {
  fontFamily: INTER_SEMIBOLD,
  fontSize: 20,
  fontWeight: 600,
  lineHeight: '24px',
  letterSpacing: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: 18,
    lineHeight: '24px',
    letterSpacing: 0,
  },
};

theme.typography.ui3r = {
  fontSize: 18,
  lineHeight: '21.6px',
  letterSpacing: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
    lineHeight: '24px',
    letterSpacing: 0,
  },
};

theme.typography.ui3b = {
  fontFamily: INTER_SEMIBOLD,
  fontSize: 18,
  fontWeight: 600,
  lineHeight: '21.6px',
  letterSpacing: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
    lineHeight: '24px',
    letterSpacing: 0,
  },
};

theme.typography.ui4r = {
  fontSize: 16,
  lineHeight: '19.2px',
  letterSpacing: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
    lineHeight: '24px',
    letterSpacing: 0,
  },
};

theme.typography.ui4b = {
  fontFamily: INTER_SEMIBOLD,
  fontSize: 16,
  fontWeight: 600,
  lineHeight: '19.2px',
  letterSpacing: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
    lineHeight: '24px',
    letterSpacing: 0,
  },
};

theme.typography.ui5r = {
  fontSize: 14,
  lineHeight: '16.8px',
  letterSpacing: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
    lineHeight: '16px',
    letterSpacing: 0,
  },
};

theme.typography.ui5b = {
  fontFamily: INTER_SEMIBOLD,
  fontSize: 14,
  fontWeight: 600,
  lineHeight: '16.8px',
  letterSpacing: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
    lineHeight: '16px',
    letterSpacing: 0,
  },
};

theme.typography.ui6r = {
  fontSize: 12,
  lineHeight: '14.4px',
  letterSpacing: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: 10,
    lineHeight: '16px',
    letterSpacing: 0,
  },
};

theme.typography.ui6b = {
  fontFamily: INTER_SEMIBOLD,
  fontSize: 12,
  fontWeight: 600,
  lineHeight: '14.4px',
  letterSpacing: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: 10,
    lineHeight: '16px',
    letterSpacing: 0,
  },
};

theme.typography.ui7r = {
  fontSize: 10,
  lineHeight: '12px',
  letterSpacing: 0,
};

theme.typography.ui7b = {
  fontFamily: INTER_SEMIBOLD,
  fontSize: 10,
  fontWeight: 600,
  lineHeight: '12px',
  letterSpacing: 0,
};

export default theme;
