import { Outlet, useMatch } from 'react-router-dom';
import { Box } from '@mui/material';

import bgImage from 'assets/bgImage.jpg';

import NavBar from './NavBar';
import ImageContent from './ImageContent';

const NavBarWithContent: React.FC = () => {
  const isRootPath = !!useMatch('/');

  const renderContent = () => {
    return (
      <>
        <NavBar />
        <Box component='main'>
          <Outlet />
        </Box>
      </>
    );
  };

  const renderImageContent = () => {
    return (
      <>
        <Box
          sx={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            height: 600, // TODO: adjust for small screens
          }}
        >
          <NavBar />
          <ImageContent />
        </Box>
        <Box component='main'>
          <Outlet context={['qwert, test']} />
        </Box>
      </>
    );
  };

  return <Box sx={{ flex: '1 0 auto' }}>{isRootPath ? renderImageContent() : renderContent()}</Box>;
};

export default NavBarWithContent;
