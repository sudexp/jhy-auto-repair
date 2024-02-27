import { ThemeProvider } from '@mui/system';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import theme from 'theme';
import { router } from 'router';

import 'leaflet/dist/leaflet.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default App;
