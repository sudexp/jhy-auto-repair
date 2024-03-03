import { Stack, Typography } from '@mui/material';

import PhoneLink from 'components/PhoneLink';

const ImageContent: React.FC = () => {
  return (
    <Stack spacing={4}>
      <Typography variant='h2' color='typography.light'>
        JYVÄSKYLÄN HUOLTOYKKÖSET
      </Typography>
      <Typography variant='ui2r' color='typography.light'>
        Jyväskylän huoltoykköset Oy palveluksessasi.
      </Typography>
      <Typography variant='ui2r' color='typography.light'>
        Tervetuloa paremman autohuollon asiakkaaksi, jossa ajatelemme kuskin kukkaron ja auton parasta yli kymmenen vuoden kokemuksella ja
        hintatakuulla tottakai.
      </Typography>
      <Typography variant='ui2r' color='typography.light'>
        Palvelemme arkisin ma–pe 8-16.30 osoiteessa Kuormaajantie 6, 40320, Jyväskylä
      </Typography>
      <Stack direction='row' spacing={1}>
        <Typography variant='ui3r' color='typography.light'>
          Soita ja varaa aikaa:
        </Typography>
        <PhoneLink phoneNumber='0452393591' />
      </Stack>
    </Stack>
  );
};

export default ImageContent;
