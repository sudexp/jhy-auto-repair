import { Box } from '@mui/material';

import LayoutContainer from 'components/LayoutContainer';
import Logo from 'layout/NavBarWithContent/NavBar/Logo';
import { greyColors, redColors } from 'theme/colors';

const Footer: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexShrink: 0 }}>
      <LayoutContainer sx={{ py: { xs: 2, md: 4 }, bgcolor: greyColors.dark, color: redColors.dark }}>
        <Logo />
      </LayoutContainer>
    </Box>
  );
};

export default Footer;
