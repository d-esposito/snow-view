import React, { createContext, useState } from 'react';
import { LayerNames } from '../types';

interface LayerContextType {
    layerNames: string[];
    toggleLayer: (name: LayerNames) => void;
}

export const LayerContext = createContext<LayerContextType>({
    layerNames: [],
    toggleLayer: () => {},
});

interface LayerProviderProps {
    children: React.ReactNode;
}

export const LayerProvider: React.FC<LayerProviderProps> = ({ children }) => {
    const [layerNames, setLayerNames] = useState<LayerNames[]>([]);

    const toggleLayer = (layerName: LayerNames) => {
        setLayerNames((prevLayerNames) => {
            if(prevLayerNames.includes(layerName)) {
                return prevLayerNames.filter((name) => name !== layerName);
            } else {
                return [...prevLayerNames, layerName];
            }
        });
    };

    return (
        <LayerContext.Provider value={{ layerNames, toggleLayer }}>
            {children}
        </LayerContext.Provider>
    )
};