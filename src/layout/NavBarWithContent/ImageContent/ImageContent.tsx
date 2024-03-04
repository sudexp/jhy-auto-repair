import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import PhoneLink from 'components/PhoneLink';

import { getAlignItems, getDirection } from './utils';

const ImageContent: React.FC = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      spacing={4}
      sx={{
        '&': {
          color: 'typography.light',
        },
      }}
    >
      <Typography variant='h1'>JYVÄSKYLÄN HUOLTOYKKÖSET</Typography>
      <Typography variant='p2b'>Luottamuksellinen autonhuollon kumppanisi!</Typography>
      <Typography variant='p2'>
        Tervetuloa paremman autohuollon asiakkaaksi. Tarjoamme teille korkealaatuisia autonhuollon palveluita, jotka perustuvat yli kymmenen
        vuoden kokemukseen ja ammattitaitoon. Tarkoituksemme on auttaa teitä löytämään parhaat autonhuollon ratkaisut ja tarjota ne
        edullisesti.
      </Typography>
      <Stack direction='row' spacing={1}>
        <Typography variant='p2'>
          Palvelemme ma–pe klo 8:00–16.30 osoitteessa <b>Kuormaajantie 6, 40320, Jyväskylä</b>.
        </Typography>
      </Stack>
      <Stack direction={getDirection(isSmDown)} spacing={1} sx={{ alignItems: getAlignItems(isSmDown) }}>
        <Typography variant='p2'>Ota yhteyttä meille puhelimitse: </Typography>
        <PhoneLink phoneNumber='0452393591' />
      </Stack>
    </Stack>
  );
};

export default ImageContent;
