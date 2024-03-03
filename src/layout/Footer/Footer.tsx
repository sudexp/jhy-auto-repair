import { useMatch, Link as RouterLink } from 'react-router-dom';
import { Box, Link, Stack, Typography, useTheme } from '@mui/material';

import LayoutContainer from 'components/LayoutContainer';
import Logo from 'layout/NavBarWithContent/NavBar/Logo';

import { getBgColor } from './utils';

const Footer: React.FC = () => {
  const isRootPath = !!useMatch('/');
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexShrink: 0, mt: 6 }}>
      <LayoutContainer sx={{ py: { xs: 2, md: 4 }, bgcolor: getBgColor(isRootPath) }}>
        <Box
          display='grid'
          gridTemplateColumns='repeat(2, 1fr)'
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
          <Box
            gridColumn='span 1'
            sx={{
              '&': {
                color: 'typography.light',
              },
            }}
          >
            <Stack direction='row' spacing={1}>
              <Typography variant='p3'>Osoite:</Typography>
              <Typography
                variant='p3'
                sx={{
                  '& a': {
                    color: 'typography.light',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  },
                }}
              >
                <RouterLink to='/contacts'>Kuormaajantie 6, 40320, Jyväskylä</RouterLink>
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1}>
              <Typography variant='p3'>Puhelinnumero:</Typography>
              <Typography variant='p3'>
                <Link href='tel:0452393591' underline='hover' color='typography.light'>
                  0452393591
                </Link>
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1}>
              <Typography variant='p3'>Sähköposti:</Typography>
              <Typography variant='p3'>
                <Link href='mailto:huoltoykkoset@gmail.com' underline='hover' color='typography.light'>
                  huoltoykkoset@gmail.com
                </Link>
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1}>
              <Typography variant='p3'>Laskut:</Typography>
              <Typography variant='p3'>
                <Link href='mailto:huoltoykkoset@gmail.com' underline='hover' color='typography.light'>
                  huoltoykkoset.laskutus@gmail.com
                </Link>
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1}>
              <Typography variant='p3'>Y-tunnus:</Typography>
              <Typography variant='p3'>3422467-8</Typography>
            </Stack>
          </Box>
        </Box>
      </LayoutContainer>
    </Box>
  );
};

export default Footer;
