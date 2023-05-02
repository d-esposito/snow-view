import React, { useContext } from 'react';
import { MapContainer, TileLayer, ImageOverlay } from 'react-leaflet';
import { LayerContext } from '../../contexts';
import Image from '../../assets/trollface.png';

import './MapView.css';
import 'leaflet/dist/leaflet.css';

const MapView: React.FC = () => {
    const { layerNames } = useContext(LayerContext);
    const coloradoBounds = [[41.00000, -109.05000], [36.99999, -102.04000]];

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
        {
            layerNames.includes('mountain') ? <ImageOverlay url={Image} bounds={coloradoBounds} opacity={0.5} /> : <></>
        }
        </MapContainer>
    );
};

export default MapView;