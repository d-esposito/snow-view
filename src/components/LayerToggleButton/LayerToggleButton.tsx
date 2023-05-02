import React, { useState, useContext } from 'react';
import { LayerContext } from '../../contexts';
import { LayerToggleButtonProps, LayerNames } from '../../types';
import MountainIcon from './assets/mountain.svg';
import AngleIcon from './assets/angle.svg';

import './LayerToggleButton.css';

const LayerToggleButton: React.FC<LayerToggleButtonProps> = ({ layerName, icon }) => {
    const [enabled, setEnabled] = useState(false);
    const { toggleLayer } = useContext(LayerContext);

    const icons = {
        "mountain": MountainIcon,
        "radar": AngleIcon,
    }

    const buttonClick = () => {
        setEnabled((prevEnabled) => !prevEnabled);
        let pseudoname: LayerNames = icon == 'mountain' ? 'red' : 'blue';
        toggleLayer(pseudoname);

        console.log(layerName);
    };

    return (
        <button type='button' className={enabled ? 'enabled' : ''} onClick={buttonClick}>
            <img src={icons[icon]} alt={icon+" icon"} />
        </button>
    );
};

export default LayerToggleButton;