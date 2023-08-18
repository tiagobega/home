import { Canvas } from "@react-three/fiber";

import "./index.scss";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        {/* <mesh>
          <boxGeometry />
          <meshBasicMaterial />
        </mesh> */}
        <mesh>
          <boxGeometry />
          <meshBasicMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default App;
