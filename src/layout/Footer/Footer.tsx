import { useMatch } from 'react-router-dom';
import { Box } from '@mui/material';

import LayoutContainer from 'components/LayoutContainer';
import Logo from 'layout/NavBarWithContent/NavBar/Logo';
import { greyColors, redColors } from 'theme/colors';

const Footer: React.FC = () => {
  const isRootPath = !!useMatch('/');

  return (
    <Box sx={{ display: 'flex', flexShrink: 0 }}>
      <LayoutContainer sx={{ py: { xs: 2, md: 4 }, bgcolor: isRootPath ? 'transparent' : greyColors.dark, color: redColors.dark }}>
        <Logo />
      </LayoutContainer>
    </Box>
  );
};

export default Footer;
