import { useFrame } from "@react-three/fiber";
import Camera from "../Camera";
import Player from "../Player";
import { Stage } from "@react-three/drei";
import Ground from "../Ground";

export const Scene = () => {
  useFrame(() =>
    // state
    {
      // console.log(state);
    }
  );

  return (
    <Stage adjustCamera={false}>
      <Camera />
      <Player />
      <Ground />
    </Stage>
  );
};

export default Scene;
