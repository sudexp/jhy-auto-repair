import { ThemeProvider } from '@mui/system';
import { StyledEngineProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga4';

import theme from 'theme';
import { router } from 'router';

const App = () => {
  ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default App;
