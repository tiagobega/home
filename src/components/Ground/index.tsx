import { useControls } from 'leva';

const Ground = () => {
  const groundOptions = useControls('Ground', {
    color: '#192a23',
  });

  return (
    <mesh rotation-x={-Math.PI / 2} scale={[100, 100, 1]} receiveShadow>
      <planeGeometry />
      <meshStandardMaterial color={groundOptions.color} />
    </mesh>
  );
};

export default Ground;
