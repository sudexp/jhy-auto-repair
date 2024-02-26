import { ThemeProvider } from '@mui/system';
import { RouterProvider } from 'react-router-dom';

import theme from 'theme';
import { router } from 'router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
