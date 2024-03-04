import { ThemeProvider } from '@mui/system';
import { StyledEngineProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

import theme from 'theme';
import { router } from 'router';

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
