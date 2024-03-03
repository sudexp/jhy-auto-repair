import { Avatar, Box, Link, Stack, Typography, useTheme } from '@mui/material';

import Seo from 'components/Seo';
import LeafletMap from 'components/LeafletMap';

const Contacts: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Seo
        title='Jyväskylän Huoltoykköset - Yhteystiedot'
        description='Korjaamo Jyväskylä, autohuolto Jyväskylä, Seppälänkangas Jyväskylä autokorjaamo yhteystiedot'
        name='Jyväskylän Huoltoykköset - Yhteystiedot'
        type='website'
      />
      <Box sx={{ '&': { color: 'typography.dark' } }}>
        <Stack spacing={3}>
          <Typography variant='h2'>YHTEYSTIEDOT</Typography>
          <Stack spacing={2}>
            <Typography variant='p3' sx={{ fontWeight: 'bold' }}>
              Kokemus ja ammattitaito jokaisessa yksityiskohdassa!
            </Typography>
            <Typography variant='p3'>
              On iloa esittää teille meidän kokeneen ja ammattitaitavasti koulutetun henkilöstön. Meidän tavoitteemme on tarjota teille
              korkealaatuisen autonhuollon palveluita, jotka perustuvat meidän yli kymmenen vuoden kokemuksesta ja ammattitaitoon.
            </Typography>
            <Typography variant='p3'>
              Meidän maisterimme erottuu korkealta koulutukselta ja ammattitaitolta, mikä mahdollistaa meille tarjota teille
              erityislaatuisen palvelun. Meidän työskentelyssä on aina huomiota herättävän tarkka ja huolellinen lähestymistapa, joka takaa
              teille parhaan mahdollisen tuloksen.
            </Typography>
            <Typography variant='p3'>
              Olemme avoimia arkisin maanantaita pe klo 8–16.30 osoitteessa Kuormaajantie 6, 40320, Jyväskylä. Ota yhteyttä meille
              puhelimitse{' '}
              <Link href='tel:0452393591' underline='hover' color='typography.dark'>
                0452393591
              </Link>{' '}
              tai varaa aikaa.
            </Typography>
            <Typography variant='p3' sx={{ fontWeight: 'bold' }}>
              Meidän tiimimme:
            </Typography>
            <Stack direction='row' spacing={4}>
              <Stack spacing={1} sx={{ alignItems: 'center' }}>
                <Avatar
                  alt='Asentaja1'
                  src='src/assets/png/photo1.png'
                  sx={{
                    width: '150px',
                    height: '150px',
                  }}
                />
                <Typography variant='p2'>Andrey</Typography>
              </Stack>
              <Stack spacing={1} sx={{ alignItems: 'center' }}>
                <Avatar
                  alt='Asentaja1'
                  src='src/assets/png/photo2.png'
                  sx={{
                    width: '150px',
                    height: '150px',
                  }}
                />
                <Typography variant='p2'>Aaro</Typography>
              </Stack>
            </Stack>
            <Typography variant='p3'>
              Olemme iloisia näkemään teidät meidän maisterimme ja tarjoamme teille turvallisen ja miellyttävän palveluaseman.
            </Typography>
            <Typography variant='p3'>
              Löydä meidät helposti Seppäänkangas-alueella! Tämä sijainti tekee meistä täydellisen valinnan sekä koti- että
              työmatkailijoille etsien korkealaatuisen autonhuollon palveluita lähellä.
            </Typography>
          </Stack>
        </Stack>
        <Box id='contacts' sx={{ maxWidth: theme.breakpoints.values.lg, margin: '0 auto' }}>
          <LeafletMap />
        </Box>
        <Typography variant='p3'>
          Odottamme sinua maisterimme Seppäänkangas-alueella ja tarjoamme sinulle meidän autonhuollon palveluita.
        </Typography>
      </Box>
    </>
  );
};

export default Contacts;
