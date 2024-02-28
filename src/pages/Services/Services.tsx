import { Stack, Typography } from '@mui/material';

import Seo from 'components/Seo';

const Services: React.FC = () => {
  return (
    <>
      <Seo title='Jyväskylän Huoltoykköset - Palvelut' description='' name='' type='' />
      <Stack id='services' spacing={3}>
        <Typography variant='h4'>TÄYDEN PALVELUN AUTOHUOLTO KUSTANNUSTEHOKKAASTI</Typography>
      </Stack>
    </>
  );
};

export default Services;
