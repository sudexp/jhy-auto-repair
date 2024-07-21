import { useEffect } from 'react';
import { useMatch, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Stack } from '@mui/material';

import Footer from './Footer';
import NavBarWithContent from './NavBarWithContent';
import { getSpacing } from './utils';

const Layout: React.FC = () => {
  const isRootPath = !!useMatch('/');
  const { pathname } = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: pathname });
  }, [pathname]);

  return (
    <Stack spacing={getSpacing(isRootPath)} sx={{ minHeight: '100vh' }}>
      <NavBarWithContent />
      {!isRootPath && <Footer />}
    </Stack>
  );
};

export default Layout;
