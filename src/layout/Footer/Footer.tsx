import { Box, Typography } from '@mui/material';

import LayoutContainer from 'components/LayoutContainer';

const Footer: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexShrink: 0 }}>
      <LayoutContainer sx={{ py: { xs: 2, md: 4 }, bgcolor: '#e7e7e7', color: 'rgb(226,39,39)' }}>
        <Typography>Footer</Typography>
      </LayoutContainer>
    </Box>
  );
};

export default Footer;
