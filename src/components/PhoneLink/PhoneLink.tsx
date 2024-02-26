import { Box, Link, Stack, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

interface PhoneLinkProps {
  phoneNumber: string;
}

const PhoneLink: React.FC<PhoneLinkProps> = ({ phoneNumber }: PhoneLinkProps) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignSelf='flex-start'
      sx={{
        '&:hover': {
          transform: 'scale(1.025)',
          transition: 'transform  0.3s ease-in-out',
        },
      }}
    >
      <Link href={`tel:${phoneNumber}`} underline='hover'>
        <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }}>
          <PhoneIcon fontSize='medium' />
          <Typography variant='ui3r'>{phoneNumber}</Typography>
        </Stack>
      </Link>
    </Box>
  );
};

export default PhoneLink;
