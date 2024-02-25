import { useMatch } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';

import Logo from './Logo';
import { getBorderBottom } from './utils';

const NavBar: React.FC = () => {
  const isRootPath = !!useMatch('/');

  return (
    <AppBar
      position='sticky'
      elevation={0}
      color='transparent'
      sx={{ borderBottom: getBorderBottom(isRootPath), borderBottomColor: '#d0d0d0', mb: 3 }}
    >
      <Toolbar disableGutters variant='dense' sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
