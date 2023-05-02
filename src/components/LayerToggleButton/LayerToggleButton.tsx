import React, { useState } from 'react';
import { LayerToggleButtonProps } from '../../types';
import MountainIcon from './assets/mountain.svg';
import AngleIcon from './assets/angle.svg';

import './LayerToggleButton.css';

const LayerToggleButton: React.FC<LayerToggleButtonProps> = ({ layerName, icon }) => {
    const [enabled, setEnabled] = useState(false);

    const icons = {
        "mountain": MountainIcon,
        "radar": AngleIcon,
    }

    const buttonClick = () => {
        setEnabled((prevEnabled) => !prevEnabled);
        console.log(layerName);
    };

    return (
        <button type='button' className={enabled ? 'enabled' : ''} onClick={buttonClick}>
            <img src={icons[icon]} alt={icon+" icon"} />
        </button>
    );
};

export default LayerToggleButton;