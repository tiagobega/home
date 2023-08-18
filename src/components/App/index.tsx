import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

import Scene from "../Scene";

import "./index.scss";
import LoadingScreen from "../LoadingScreen";
import HudScreen from "../HudScreen";
import GuiScreen from "../GuiScreen";

const App = () => {
  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={1} />
        {/* <OrbitControls /> */}
        <Scene />
        <gridHelper args={[30, 30, 0xff0000, "teal"]} />

        {/* <axesHelper scale={10} /> */}
      </Canvas>
      <HudScreen />
      <GuiScreen />
      <LoadingScreen />
    </div>
  );
};

export default App;
