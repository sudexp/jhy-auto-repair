import { Stack, Typography } from '@mui/material';

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
        Palvelemme arkisin ma – pe 8-16.30 Jyväskylä – Kuormaajantie 6
      </Typography>
    </Stack>
  );
};

export default ImageContent;
