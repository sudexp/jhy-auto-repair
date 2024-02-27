import { ThemeProvider } from '@mui/system';
import { StyledEngineProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import theme from 'theme';
import { router } from 'router';

import 'leaflet/dist/leaflet.css';

const App = () => {
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
