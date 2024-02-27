import { Stack, Typography } from '@mui/material';

import PhoneLink from 'components/PhoneLink';
import { commonColors } from 'theme/colors';

const ImageContent: React.FC = () => {
  return (
    <Stack spacing={4}>
      <Typography variant='h2' color={commonColors.white}>
        AUTOKORJAAMO JYVÄSKYLÄN HUOLTOYKKÖSET
      </Typography>
      <Typography variant='ui2r' color={commonColors.white}>
        Korjaamo Huoltoykkösten Jyväskylän Kuormaajantien autokorjaamo palveluksessasi, tervetuloa paremman autohuollon ja korjaamon
        asiakkaaksi, jossa ajatellaan kuskin kukkaron ja auton parasta – hintatakuulla tottakai!
      </Typography>
      <Typography variant='ui2r' color={commonColors.white}>
        Palvelemme arkisin ma–pe 8-16.30 Jyväskylä, Kuormaajantie 6
      </Typography>
      <Stack direction='row' spacing={1}>
        <Typography variant='ui3r' color={commonColors.white}>
          Soita ja varaa aikaa:
        </Typography>
        <PhoneLink phoneNumber='044 755 0266' />
      </Stack>
    </Stack>
  );
};

export default ImageContent;
