import { Box, Stack, Typography } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

const icon = L.icon({
  iconUrl: 'leaflet-marker.svg',
  iconSize: [40, 40],
  iconAnchor: [25, 30],
  popupAnchor: [-5, -30],
});

const LeafletMap: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
      <MapContainer
        center={[62.275079586373295, 25.78202303900985]}
        zoom={13}
        scrollWheelZoom={false}
        attributionControl={false}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[62.27532697658108, 25.783267621046065]} icon={icon}>
          <Popup>
            <Stack spacing={0.25} sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant='p3'>Jyväskylän</Typography>
              <Typography variant='p3'>Huoltoykköset</Typography>
            </Stack>
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default LeafletMap;
