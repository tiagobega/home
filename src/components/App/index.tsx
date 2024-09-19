import { Canvas } from '@react-three/fiber';
import { AnimationProvider } from '@app/contexts/animation';

import Scene from '../Scene';

import LoadingScreen from '../LoadingScreen';
import HudScreen from '../HudScreen';
import GuiScreen from '../GuiScreen';

import './index.scss';

const App = () => {
  return (
    <AnimationProvider>
      <div className="App">
        <Canvas shadows>
          <ambientLight intensity={1} />

          {/* <OrbitContr/ols /> */}
          <Scene />
          {/* <gridHelper args={[30, 30, 0xff0000, "teal"]} /> */}

          {/* <axesHelper scale={10} /> */}
        </Canvas>
        <HudScreen />
        <GuiScreen />
        <LoadingScreen />
      </div>
    </AnimationProvider>
  );
};

export default App;
