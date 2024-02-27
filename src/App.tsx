import { ThemeProvider } from '@mui/system';
import { RouterProvider } from 'react-router-dom';

import theme from 'theme';
import { router } from 'router';

import 'leaflet/dist/leaflet.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
