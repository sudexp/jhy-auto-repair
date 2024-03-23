import { Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import PhoneLink from 'components/PhoneLink';

import { getJustifyContent, getHeightPx, getDirection, getAlignItems } from './utils';

const ImageContent: React.FC = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      spacing={2}
      sx={{
        '&': {
          justifyContent: getJustifyContent(isSmDown),
          height: getHeightPx(isSmDown),
          color: 'typography.light',
        },
      }}
    >
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Typography variant='h1'>JYVÄSKYLÄN HUOLTOYKKÖSET</Typography>
          <Divider sx={{ backgroundColor: 'typography.light' }} />
          <Typography variant='p2b'>Luottamuksellinen autonhuollon kumppanisi!</Typography>
        </Stack>
        <Typography variant='p2' sx={{ maxWidth: '1000px' }}>
          Tervetuloa paremman autohuollon asiakkaaksi. Tarjoamme teille korkealaatuisia autonhuollon palveluita, jotka perustuvat yli
          kymmenen vuoden kokemukseen ja ammattitaitoon. Tarkoituksemme on auttaa teitä löytämään parhaat autonhuollon ratkaisut ja tarjota
          ne edullisesti.
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography variant='p2'>
          Palvelemme ma–pe klo 8:00–16.30 osoitteessa <b>Kuormaajantie 6, 40320, Jyväskylä</b>.
        </Typography>
        <Stack direction={getDirection(isSmDown)} spacing={1} sx={{ alignItems: getAlignItems(isSmDown) }}>
          <Typography variant='p2'>Ota yhteyttä meille puhelimitse: </Typography>
          <PhoneLink phoneNumber='0452393591' />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImageContent;
