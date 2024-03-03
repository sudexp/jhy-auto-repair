import { Stack, Typography } from '@mui/material';

import PhoneLink from 'components/PhoneLink';

const ImageContent: React.FC = () => {
  return (
    <Stack
      spacing={4}
      sx={{
        '&': {
          color: 'typography.light',
        },
      }}
    >
      <Typography variant='h2'>JYVÄSKYLÄN HUOLTOYKKÖSET</Typography>
      <Typography variant='ui2r'>Tämä on teidän luottamukselliset autonhuollon kumppanit!</Typography>
      <Typography variant='ui2r'>
        Tervetuloa paremman autohuollon asiakkaaksi, jossa tarjoamme teille korkealaatuisen autonhuollon palveluita, jotka perustuvat yli
        kymmenen vuoden kokemuksesta ja ammattitaitoon. Meidän tarkoituksemme on auttaa teitä löytämään parhaat autonhuollon ratkaisut ja
        tarjota ne hinta-arvoparissa.
      </Typography>
      <Typography variant='ui2r'>
        Olemme avoimia arkisin maanantaita ma–pe klo 8–16.30 osoitteessa Kuormaajantie 6, 40320, Jyväskylä.
      </Typography>
      <Stack direction='row' spacing={1}>
        <Typography variant='ui2r'>Ota yhteyttä meille puhelimitse</Typography>
        <PhoneLink phoneNumber='0452393591' />
        <Typography variant='ui2r'>tai varaa aikaa.</Typography>
      </Stack>
    </Stack>
  );
};

export default ImageContent;
