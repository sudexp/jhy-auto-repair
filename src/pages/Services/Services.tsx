import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Stack, Typography, useTheme } from '@mui/material';

import Seo from 'components/Seo';

import { services } from './utils';

const Services: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Seo
        title='Jyväskylän Huoltoykköset - Palvelut'
        description='Korjaamo Jyväskylä, autohuolto Jyväskylä, autopalvelu Jyväskylä'
        name='Jyväskylän Huoltoykköset - Palvelut'
        type='website'
      />
      <Stack
        id='services'
        spacing={3}
        sx={{
          '&': { color: 'typography.dark' },
        }}
      >
        <Stack spacing={3}>
          <Typography variant='h2'>TÄYDEN PALVELUN AUTOHUOLTO KUSTANNUSTEHOKKAASTI</Typography>
          <Stack spacing={2}>
            <Typography variant='p3'>
              Autohuoltomme tarjoaa laajan valikoiman palveluita, jotka auttavat ylläpitämään autosi parhaassa kunnossa. Tavoitteemme on
              tarjota teille luotettavan ja tehokkaan palvelun, joka sisältää kaiken tarvittavan huollon ja korjauksen, yksinkertaisesta
              teknisestä huollosta raskaisiin korjaustoimenpiteisiin. Toteamme on keskittyä komfortin ja helpottamisen tekemiseen,
              tarjoamalla korkealaatuisen palvelun ja yksilöllisen lähestymistavan jokaiseen asiakkaaseen.
            </Typography>
            <Typography variant='p3' sx={{ fontWeight: 'bold' }}>
              Palvelumme sisältää:
            </Typography>
          </Stack>
        </Stack>
        <Box
          display='grid'
          gridTemplateColumns='repeat(2, 1fr)'
          gap={3}
          sx={{
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
              gridTemplateColumns: 'repeat(1, 1fr)',
            },
          }}
        >
          {services.map(({ id, title, component }) => (
            <Box key={id} gridColumn='span 1'>
              <ListItem disablePadding>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'transparent',
                    }}
                  >
                    {component}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={title} primaryTypographyProps={{ variant: 'p3' }} sx={{ color: 'typography.dark' }} />
              </ListItem>
            </Box>
          ))}
        </Box>
        <Typography variant='p3'>… ja kaikki muu mahdollinen autosi hyvinvoinnin tueksi!</Typography>
      </Stack>
    </>
  );
};

export default Services;
