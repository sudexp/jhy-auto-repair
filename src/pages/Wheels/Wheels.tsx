import { Box, Stack, Typography } from '@mui/material';

const Wheels: React.FC = () => {
  return (
    <Stack id='wheels' spacing={3}>
      <Typography variant='h4'>RENGASMYYNTI JA RENGASHOTELLI</Typography>
      <Typography variant='ui3r'>
        Kunnon renkaat on halpa henkivakuutus! Meiltä saat järkevän tarjouksen kunnon talvi- ja kesärenkaille. Tule käymään niin tarkistamme
        veloituksetta renkaasi! Me säilytämme rengashotellissamme autosi renkaita sesongin ylitse kuin omiamme. Rengashotellitarjouksemme
        pitää sisällään renkaiden pesun ja allevaihdon.
      </Typography>
      <Box
        display='grid'
        gridTemplateColumns='repeat(2, 1fr)'
        gap={3}
        sx={{
          '@media (max-width: 600px)': {
            gridTemplateColumns: 'repeat(1,  1fr)',
          },
        }}
      >
        <Box gridColumn='span 1'>
          <Stack spacing={1}>
            <Box
              component='img'
              sx={{ display: 'block', maxHeight: '100%', maxWidth: '100%' }}
              alt='Rengasmyynti'
              src='/src/assets/jpg/wheels.jpg'
            />
            <Stack spacing={1}>
              <Typography variant='p1'>RENGASMYYNTI</Typography>
              <Typography variant='p2'>
                Kunnon renkaat on halpa henkivakuutus! Meiltä saat järkevän tarjouksen kunnon talvi- ja kesärenkaille. Tule käymään niin
                tarkistamme veloituksetta renkaasi!
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box gridColumn='span 1'>
          <Stack spacing={1}>
            <Box
              component='img'
              sx={{ display: 'block', maxHeight: '100%', maxWidth: '100%' }}
              alt='Rengashotelli'
              src='/src/assets/jpg/hotel.jpg'
            />
            <Stack spacing={1}>
              <Typography variant='p1'>RENGASHOTELLI</Typography>
              <Typography variant='p2'>
                Me säilytämme renkaitasi sesongin ylitse kuin omiamme. Rengashotellitarjouksemme pitää sisällään renkaiden pesun ja
                allevaihdon.
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default Wheels;
