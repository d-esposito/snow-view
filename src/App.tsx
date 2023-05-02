import { LayerSelectBar, MapView } from './components';
import { LayerProvider } from './contexts';
import { LayerToggleButtonProps } from './types';

import './App.css'

function App() {
  const layers: LayerToggleButtonProps[] = [
    {
      layerName: 'Satellite Image',
      icon: 'mountain',
    },
    {
      layerName: 'Slope Angle',
      icon: 'radar',
    },
  ];

  return (
    <LayerProvider>
      <LayerSelectBar buttons={layers}/>
      <MapView />
    </LayerProvider>    
  )
}

export default App
