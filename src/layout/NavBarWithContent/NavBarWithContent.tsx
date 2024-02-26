import { Outlet, useMatch } from 'react-router-dom';
import { Box } from '@mui/material';

import LayoutContainer from 'components/LayoutContainer';
import bgImage from 'assets/jpg/bgImage.jpg';

import NavBar from './NavBar';
import ImageContent from './ImageContent';

const NavBarWithContent: React.FC = () => {
  const isRootPath = !!useMatch('/');

  const renderContent = () => {
    return (
      <LayoutContainer>
        <NavBar />
        <Box component='main'>
          <Outlet />
        </Box>
      </LayoutContainer>
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
          <LayoutContainer>
            <NavBar />
            <ImageContent />
          </LayoutContainer>
        </Box>
        <LayoutContainer>
          <Box component='main'>
            <Outlet /* context={[]} */ />
          </Box>
        </LayoutContainer>
      </>
    );
  };

  return <Box sx={{ flex: '1 0 auto' }}>{isRootPath ? renderImageContent() : renderContent()}</Box>;
};

export default NavBarWithContent;
