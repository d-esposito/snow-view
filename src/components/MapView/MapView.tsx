import React, { useContext } from "react";
import { LayerContext } from '../../contexts';

import './MapView.css';

const MapView: React.FC = () => {
    const { layerNames } = useContext(LayerContext);

    const className = [...layerNames, 'map-view'].join(' ');

    return (
        <div className={className}></div>
    );
};

export default MapView;