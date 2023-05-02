import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import './MapView.css';
import 'leaflet/dist/leaflet.css';

const MapView: React.FC = () => {
    return (
        <MapContainer 
            center={[38.997222, -105.547222]} 
            zoom={7} 
            maxZoom={16} 
            minZoom={5}
            className='map-view'
        >
        <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        />
        </MapContainer>
    );
};

export default MapView;