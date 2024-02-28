import { Stack, Typography } from '@mui/material';

import PhoneLink from 'components/PhoneLink';
import { commonColors } from 'theme/colors';

const ImageContent: React.FC = () => {
  return (
    <Stack spacing={4}>
      <Typography variant='h2' color={commonColors.white}>
        JYVÄSKYLÄN HUOLTOYKKÖSET
      </Typography>
      <Typography variant='ui2r' color={commonColors.white}>
        Jyväskylän huoltoykköset Oy palveluksessasi.
      </Typography>
      <Typography variant='ui2r' color={commonColors.white}>
        Tervetuloa paremman autohuollon asiakkaaksi, jossa ajatelemme kuskin kukkaron ja auton parasta yli kymmenen vuoden kokemuksella ja
        hintatakuulla tottakai.
      </Typography>
      <Typography variant='ui2r' color={commonColors.white}>
        Palvelemme arkisin ma–pe 8-16.30 osoiteessa 40320, Jyväskylä, Kuormaajantie 6.
      </Typography>
      <Stack direction='row' spacing={1}>
        <Typography variant='ui3r' color={commonColors.white}>
          Soita ja varaa aikaa:
        </Typography>
        <PhoneLink phoneNumber='0452393591' />
      </Stack>
    </Stack>
  );
};

export default ImageContent;
