import { Box, Stack, Typography } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LeafletMap: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
      <MapContainer
        center={[62.275079586373295, 25.78202303900985]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[62.27532697658108, 25.783267621046065]}>
          <Popup>
            <Stack spacing={0.25} sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant='ui4r'>Jyväskylän</Typography>
              <Typography variant='ui4r'>Huoltoykköset</Typography>
            </Stack>
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default LeafletMap;
