import { Avatar, Box, Stack, Typography, useTheme } from '@mui/material';

import Seo from 'components/Seo';
import LeafletMap from 'components/LeafletMap';

const Contacts: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Seo title='Jyväskylän Huoltoykköset - Yhteystiedot' description='' name='' type='' />
      <Box sx={{}}>
        <Stack direction='row' spacing={4} sx={{ justifyContent: 'center' }}>
          <Stack spacing={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Avatar
              alt='Asentaja1'
              src='src/assets/png/photo1.png'
              sx={{
                width: '150px',
                height: '150px',
              }}
            />
            <Typography variant='p2' color='typography.dark'>
              Asentaja Andrey
            </Typography>
          </Stack>
          <Stack spacing={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Avatar
              alt='Asentaja1'
              src='src/assets/png/photo2.png'
              sx={{
                width: '150px',
                height: '150px',
              }}
            />
            <Typography variant='p2' color='typography.dark'>
              Asentaja Aaro
            </Typography>
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
