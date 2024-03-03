import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Stack, Typography, useTheme } from '@mui/material';

import Seo from 'components/Seo';

import { services } from './utils';

const Services: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Seo title='Jyväskylän Huoltoykköset - Palvelut' description='' name='' type='' />
      <Stack
        id='services'
        spacing={3}
        sx={{
          '&': { color: 'typography.dark' },
        }}
      >
        <Stack spacing={2}>
          <Typography variant='h4' color='typography.dark'>
            TÄYDEN PALVELUN AUTOHUOLTO KUSTANNUSTEHOKKAASTI
          </Typography>
          <Typography color='typography.dark'>
            Autonhuollonamme tarjoamme laajan valikoiman palveluita, jotka auttavat ylläpitämään autosi parhaassa kunnossa. Tavoitteemme on
            tarjota teille luotettavan ja tehokkaan palvelun, joka sisältää kaiken tarvittavan huollon ja korjauksen, yksinkertaisesta
            teknisestä huollosta raskaisiin korjaustoimenpiteisiin. Toteamme on keskittyä komfortin ja helpottamisen tekemiseen, tarjoamalla
            korkealaatuisen palvelun ja yksilöllisen lähestymistavan jokaiseen asiakkaaseen.
          </Typography>
          <Typography>Palvelumme sisältää:</Typography>
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
                <ListItemText primary={title} sx={{ color: 'typography.dark' }} />
              </ListItem>
            </Box>
          ))}
        </Box>
        <Typography>… ja kaikki muu mahdollinen autosi hyvinvoinnin tueksi!</Typography>
      </Stack>
    </>
  );
};

export default Services;
