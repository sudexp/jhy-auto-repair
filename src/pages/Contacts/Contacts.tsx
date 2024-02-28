import { Box } from '@mui/material';

import Seo from 'components/Seo';
import LeafletMap from 'components/LeafletMap';

const Contacts: React.FC = () => {
  return (
    <>
      <Seo title='Jyväskylän Huoltoykköset - Yhteystiedot' description='' name='' type='' />
      <Box id='contacts'>
        <LeafletMap />
      </Box>
    </>
  );
};

export default Contacts;
