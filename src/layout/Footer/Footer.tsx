import { useMatch } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';

import LayoutContainer from 'components/LayoutContainer';
import Logo from 'layout/NavBarWithContent/NavBar/Logo';

import { getBgColor } from './utils';
import ContentTable from './ContentTable';

const Footer: React.FC = () => {
  const isRootPath = !!useMatch('/');
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexShrink: 0 }}>
      <LayoutContainer sx={{ py: { xs: 2, md: 4 }, bgcolor: getBgColor(isRootPath) }}>
        <Box
          display='grid'
          gridTemplateColumns='1fr auto'
          gap={3}
          sx={{
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
              gridTemplateColumns: 'repeat(1,  1fr)',
            },
          }}
        >
          <Box gridColumn='span 1'>
            <Logo />
          </Box>
          <Box gridColumn='span 1'>
            <ContentTable />
          </Box>
        </Box>
      </LayoutContainer>
    </Box>
  );
};

export default Footer;
