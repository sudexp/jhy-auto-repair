import { useMatch } from 'react-router-dom';
import { Stack } from '@mui/material';

import Footer from './Footer';
import NavBarWithContent from './NavBarWithContent';
import { getSpacing } from './utils';

const Layout: React.FC = () => {
  const isRootPath = !!useMatch('/');

  return (
    <Stack spacing={getSpacing(isRootPath)} sx={{ minHeight: '100vh' }}>
      <NavBarWithContent />
      {!isRootPath && <Footer />}
    </Stack>
  );
};

export default Layout;
