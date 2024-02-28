import { Box, Stack, Typography, useTheme } from '@mui/material';

import Seo from 'components/Seo';
import LeafletMap from 'components/LeafletMap';

const Contacts: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Seo title='Jyväskylän Huoltoykköset - Yhteystiedot' description='' name='' type='' />
      <Box sx={{}}>
        <Stack direction='row' spacing={4} sx={{ justifyContent: 'center' }}>
          <Stack spacing={1}>
            <Box
              component='img'
              sx={{ display: 'block', maxHeight: '200px', maxWidth: '100%' }}
              alt='Asentaja1'
              src='/src/assets/png/photo1.png'
            />
            <Typography variant='p2'>Asentaja Andrei</Typography>
          </Stack>
          <Stack spacing={1}>
            <Box
              component='img'
              sx={{ display: 'block', maxHeight: '200px', maxWidth: '100%', position: 'relative' }}
              alt='Asentaja2'
              src='/src/assets/png/photo2.png'
            />
            <Typography variant='p2'>Asentaja XXXXXX</Typography>
          </Stack>
        </Stack>
        <Box id='contacts' sx={{ maxWidth: theme.breakpoints.values.lg, margin: '0 auto' }}>
          <LeafletMap />
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
