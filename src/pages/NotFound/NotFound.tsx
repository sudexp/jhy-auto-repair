import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link, Stack } from '@mui/material';

const NotFound: React.FC = () => {
  return (
    <Stack id='404' spacing={1} sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant='h2' color='typography.dark'>
        404 Not Found
      </Typography>
      <Typography variant='p2' color='typography.dark'>
        Valitettavasti emme löydä tätä sivua.
      </Typography>
      <Typography variant='p1'>
        <Link component={RouterLink} to='/' sx={{ display: 'block' }}>
          Etusivulle
        </Link>
      </Typography>
    </Stack>
  );
};

export default NotFound;
