import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';

import Seo from 'components/Seo';

import { services } from './utils';

const Services: React.FC = () => {
  return (
    <>
      <Seo title='Jyväskylän Huoltoykköset - Palvelut' description='' name='' type='' />
      <Stack id='services' spacing={3}>
        <Typography variant='h4'>TÄYDEN PALVELUN AUTOHUOLTO KUSTANNUSTEHOKKAASTI</Typography>
        <Box
          display='grid'
          gridTemplateColumns='repeat(2, 1fr)'
          gap={3}
          sx={{
            '@media (max-width: 600px)': {
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
                <ListItemText primary={title} />
              </ListItem>
            </Box>
          ))}
        </Box>
        <Typography variant='p1'>… ja kaikki muu mahdollinen autosi hyvinvoinnin tueksi!</Typography>
      </Stack>
    </>
  );
};

export default Services;
