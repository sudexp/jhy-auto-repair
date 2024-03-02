import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography, useTheme } from '@mui/material';

import Seo from 'components/Seo';

import { services } from './utils';

const Services: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Seo title='Jyväskylän Huoltoykköset - Palvelut' description='' name='' type='' />
      <Stack id='services' spacing={3}>
        <Typography variant='h4'>TÄYDEN PALVELUN AUTOHUOLTO KUSTANNUSTEHOKKAASTI</Typography>
        <Box>
          <List sx={{ width: '100%', maxWidth: theme.breakpoints.values.md }}>
            {services.map(({ id, title, component }) => {
              return (
                <ListItem key={id}>
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
              );
            })}
          </List>
        </Box>
        <Typography variant='p1'>… ja kaikki muu mahdollinen autosi hyvinvoinnin tueksi!</Typography>
      </Stack>
    </>
  );
};

export default Services;
