import { Stage } from '@react-three/drei';
import Camera from '../Camera';
import Ground from '../Ground';
import Player from '../Player';
import { useControls } from 'leva';

export const Scene = () => {
  const directionalCtl = useControls('Directional Light', {
    visible: true,
    position: {
      x: -0.9,
      y: 1.1,
      z: 1.6,
    },
    castShadow: true,
  });

  return (
    <Stage adjustCamera={false}>
      <Camera />
      <Player />
      <Ground />
      <directionalLight
        visible={directionalCtl.visible}
        position={[
          directionalCtl.position.x,
          directionalCtl.position.y,
          directionalCtl.position.z,
        ]}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        castShadow={directionalCtl.castShadow}
      />
    </Stage>
  );
};

export default Scene;
