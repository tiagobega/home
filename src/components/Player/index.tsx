import { useControls } from 'leva';
import { useWindowSize } from '@hooks/useWindowSize';
import MichellyModel from '@components/models/Michelly';

export const Player = () => {
  const ratoCTL = useControls('Position', {
    position: { x: 0.3220000000000002, y: 0, z: 1.197999999999963 },
    scale: 1.2,
  });

  const { isDesktop } = useWindowSize();

  return (
    <MichellyModel
      position={
        isDesktop
          ? [ratoCTL.position.x, ratoCTL.position.y, ratoCTL.position.z]
          : [0.75, 0, -0.7]
      }
      scale={
        isDesktop
          ? [ratoCTL.scale, ratoCTL.scale, ratoCTL.scale]
          : [0.75, 0.75, 0.75]
      }
    />
  );
};

export default Player;
