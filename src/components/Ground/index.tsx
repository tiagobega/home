const Ground = () => {
  return (
    <mesh rotation-x={-Math.PI / 2} scale={[100, 100, 1]} receiveShadow>
      <planeGeometry />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  );
};

export default Ground;
