import { OrthographicCamera } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export const Camera = () => {
  const cameraPivot = useRef<THREE.Object3D>(null!);
  const camera = useRef<THREE.OrthographicCamera>(null!);

  return (
    <object3D
      ref={cameraPivot}
      rotation={[-(Math.PI / 180) * 30, -Math.PI / 4, 0]}
      name={'camera_pivot'}
      rotation-order={'YXZ'}
      position={[0, 1, 0]}
    >
      <OrthographicCamera
        makeDefault
        zoom={300}
        position-z={15}
        ref={camera}
        near={0.01}
        far={40}
        lookAt={(vector) => {
          if (typeof vector === 'number') return;
          vector.set(0, 0, 0);
        }}
      />
    </object3D>
  );
};

export default Camera;
