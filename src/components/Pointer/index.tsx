import { useAnimationFrame } from '@hooks/useAnimation';
import { useEffect, useRef } from 'react';
import { MathUtils } from '@utils/Math';

import './index.scss';

const Pointer = (): JSX.Element => {
  const pointerPosition = useRef<[number, number]>([0, 0]);
  const pointerTarget = useRef<[number, number]>([0, 0]);

  const pointerRef = useRef<HTMLDivElement>(null!);
  const subPointerRef = useRef<HTMLDivElement>(null!);

  const onMouseMove = (e: MouseEvent) => {
    pointerTarget.current[0] = e.clientX;
    pointerTarget.current[1] = e.clientY;

    if (pointerRef.current) {
      pointerRef.current.style.top = `${pointerTarget.current[1]}px`;
      pointerRef.current.style.left = `${pointerTarget.current[0]}px`;
    }

    if (
      ['a', 'button'].includes(
        (e.target as unknown as { tagName: string }).tagName.toLowerCase()
      )
    ) {
      pointerRef.current.style.width = `10px`;
      pointerRef.current.style.height = `10px`;

      subPointerRef.current.style.width = `0px`;
      subPointerRef.current.style.height = `0px`;
      subPointerRef.current.style.opacity = `0`;
    } else {
      pointerRef.current.style.height = `20px`;
      pointerRef.current.style.width = `20px`;

      subPointerRef.current.style.width = `40px`;
      subPointerRef.current.style.height = `40px`;
      subPointerRef.current.style.opacity = `1`;
    }
  };

  const animate = () => {
    const x = (pointerPosition.current[0] = MathUtils.lerp(
      pointerPosition.current[0],
      pointerTarget.current[0],
      0.1
    ));
    const y = (pointerPosition.current[1] = MathUtils.lerp(
      pointerPosition.current[1],
      pointerTarget.current[1],
      0.1
    ));

    if (subPointerRef.current) {
      subPointerRef.current.style.top = `${y}px`;
      subPointerRef.current.style.left = `${x}px`;
    }
  };

  useAnimationFrame(animate);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="SubPointer" ref={subPointerRef} />
      <div className="Pointer" ref={pointerRef}>🪄</div>
    </>
  );
};

export default Pointer;
