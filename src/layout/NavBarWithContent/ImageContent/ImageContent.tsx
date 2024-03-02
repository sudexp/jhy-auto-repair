import { Stack, Typography } from '@mui/material';

import PhoneLink from 'components/PhoneLink';
import { typographyColors } from 'theme/colors';

const ImageContent: React.FC = () => {
  return (
    <Stack spacing={4}>
      <Typography variant='h2' color={typographyColors.light}>
        JYVÄSKYLÄN HUOLTOYKKÖSET
      </Typography>
      <Typography variant='ui2r' color={typographyColors.light}>
        Jyväskylän huoltoykköset Oy palveluksessasi.
      </Typography>
      <Typography variant='ui2r' color={typographyColors.light}>
        Tervetuloa paremman autohuollon asiakkaaksi, jossa ajatelemme kuskin kukkaron ja auton parasta yli kymmenen vuoden kokemuksella ja
        hintatakuulla tottakai.
      </Typography>
      <Typography variant='ui2r' color={typographyColors.light}>
        Palvelemme arkisin ma–pe 8-16.30 osoiteessa 40320, Jyväskylä, Kuormaajantie 6.
      </Typography>
      <Stack direction='row' spacing={1}>
        <Typography variant='ui3r' color={typographyColors.light}>
          Soita ja varaa aikaa:
        </Typography>
        <PhoneLink phoneNumber='0452393591' />
      </Stack>
    </Stack>
  );
};

export default ImageContent;
