import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';

const NotFound: React.FC = () => {
  return (
    <Box id='404' sx={{ m: 2 }}>
      <Typography>Not Found Page</Typography>
      <Link component={RouterLink} to='/'>
        Back To Root
      </Link>
    </Box>
  );
};

export default NotFound;
