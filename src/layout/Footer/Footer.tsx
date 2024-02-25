import { Box, Typography } from '@mui/material';

import LayoutContainer from 'components/LayoutContainer';
import { greyColors, redColors } from 'theme/colors';

const Footer: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexShrink: 0 }}>
      <LayoutContainer sx={{ py: { xs: 2, md: 4 }, bgcolor: greyColors.dark, color: redColors.dark }}>
        <Typography>Footer</Typography>
      </LayoutContainer>
    </Box>
  );
};

export default Footer;
