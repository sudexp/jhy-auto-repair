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
      <Box
        sx={{
          '&': {
            color: 'typography.dark',
          },
        }}
      >
        <Stack spacing={3}>
          <Typography variant='h2'>YHTEYSTIEDOT</Typography>
          <Stack spacing={2}>
            <Typography variant='p3' sx={{ fontWeight: 'bold' }}>
              Kokemus ja ammattitaito jokaisessa yksityiskohdassa!
            </Typography>
            <Typography variant='p3'>
              Ylpeydellä esittelemme teille meidän kokeneen ja ammattitaitoisen henkilöstömme. Tavoitteemme on tarjota teille
              korkealaatuisen autonhuollon palveluita, jotka perustuvat yli kymmenen vuoden kokemukseen ja ammattitaitoon.
            </Typography>
            <Typography variant='p3'>
              Huoltomme erottautuu korkealla koulutuksella ja ammattitaitolla, minkä avulla voimme tarjota teille aivan erityislaatuista
              palvelua. Työskentelymme on aina erityisen tarkkaa ja huolellista, mikä takaa teille parhaan mahdollisen lopputuloksen.
            </Typography>
            <Typography variant='p3'>
              Olemme avoinna arkisin ma-pe klo 8:00–16.30 osoitteessa Kuormaajantie 6, 40320, Jyväskylä. Ota yhteyttä meille puhelimitse{' '}
              <Link href='tel:0452393591' underline='hover' color='typography.dark'>
                0452393591
              </Link>{' '}
              ja varaa aikaa.
            </Typography>
            <Typography variant='p3' sx={{ fontWeight: 'bold' }}>
              Meidän tiimimme:
            </Typography>
            <Stack direction='row' spacing={4}>
              <Stack spacing={1} sx={{ alignItems: 'center' }}>
                <Avatar
                  alt='Asentaja1'
                  src='photo1.png'
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
                  src='photo2.png'
                  sx={{
                    width: '150px',
                    height: '150px',
                  }}
                />
                <Typography variant='p2'>Aaro</Typography>
              </Stack>
            </Stack>
            <Typography variant='p3'>
              Löydä meidät helposti Seppäänkangas-alueella! Sijaintimme tekee meistä täydellisen valinnan sekä koti- että työmatkailijoille,
              jotka etsivät korkealaatuisia autonhuollon palveluita läheltä.
            </Typography>
          </Stack>
        </Stack>
        <Box id='contacts' sx={{ maxWidth: theme.breakpoints.values.lg /* , margin: '0 auto' */ }}>
          <LeafletMap />
        </Box>
        <Typography variant='p3'>
          Odottamme sinua <b>Jyväskylän Huoltoykköset</b> korjaamossa Seppäänkankaalla.
        </Typography>
      </Box>
    </>
  );
};

export default Contacts;
