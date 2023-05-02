import React from "react";
import { LayerToggleButton } from "..";
import { LayerToggleButtonProps } from "../../types";

import './LayerSelectBar.css';

const LayerSelectBar: React.FC<{ buttons: LayerToggleButtonProps[] }> = ({ buttons }) => {
    return (
        <ul>
            {buttons.map((button: LayerToggleButtonProps) => (
                <li>
                    <LayerToggleButton {...button} />
                </li>
            ))}
        </ul>
    );
};

export default LayerSelectBar;