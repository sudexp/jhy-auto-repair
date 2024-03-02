import { Box, Link, Stack, Typography } from '@mui/material';

import Seo from 'components/Seo';
import { typographyColors } from 'theme/colors';

const Wheels: React.FC = () => {
  return (
    <>
      <Seo title='Jyväskylän Huoltoykköset - Rengasmyynti ja rengashotelli' description='' name='' type='' />
      <Stack id='wheels' spacing={3}>
        <Typography variant='h4' color='typography.dark'>
          RENGASMYYNTI JA RENGASHOTELLI
        </Typography>
        <Typography variant='ui3r' color='typography.dark'>
          Kunnon renkaat on halpa henkivakuutus! Meiltä saat järkevän tarjouksen kunnon talvi- ja kesärenkaille. Tule käymään niin
          tarkistamme veloituksetta renkaasi! Me säilytämme rengashotellissamme autosi renkaita sesongin ylitse kuin omiamme.
          Rengashotellitarjouksemme pitää sisällään renkaiden pesun ja allevaihdon.
        </Typography>
        <Box
          display='grid'
          gridTemplateColumns='repeat(2, 1fr)'
          gap={3}
          sx={{
            '@media (max-width: 600px)': {
              gridTemplateColumns: 'repeat(1,  1fr)',
            },
          }}
        >
          <Box gridColumn='span 1'>
            <Stack spacing={1}>
              <Box
                component='img'
                sx={{ display: 'block', maxHeight: '100%', maxWidth: '100%' }}
                alt='Rengasmyynti'
                src='/src/assets/jpg/wheels.jpg'
              />
              <Stack spacing={1}>
                <Typography variant='p1' color='typography.dark'>
                  RENGASMYYNTI
                </Typography>
                <Typography variant='p2' color='typography.dark'>
                  Kunnon renkaat on halpa henkivakuutus! Meiltä saat järkevän tarjouksen kunnon talvi- ja kesärenkaille. Tule käymään niin
                  tarkistamme veloituksetta renkaasi!
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box gridColumn='span 1'>
            <Stack spacing={1}>
              <Box
                component='img'
                sx={{ display: 'block', maxHeight: '100%', maxWidth: '100%', position: 'relative' }}
                alt='Rengashotelli'
                src='/src/assets/jpg/hotel.jpg'
              />
              <Box
                sx={{
                  position: 'absolute',
                }}
              >
                <Link
                  href='https://www.freepik.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  sx={{ color: typographyColors.light, textDecoration: 'none', fontSize: '0.5rem', ml: 0.5 }}
                >
                  designed by fxquadro - Freepik.com
                </Link>
              </Box>
              <Stack spacing={1}>
                <Typography variant='p1' color='typography.dark'>
                  RENGASHOTELLI
                </Typography>
                <Typography variant='p2' color='typography.dark'>
                  Me säilytämme renkaitasi sesongin ylitse kuin omiamme. Rengashotellitarjouksemme pitää sisällään renkaiden pesun ja
                  allevaihdon.
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Wheels;
