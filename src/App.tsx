import { LayerSelectBar, MapView } from './components';
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
    <div className='site-wrapper'>
      <LayerSelectBar buttons={layers}/>
      <MapView />
    </div>
  )
}

export default App
