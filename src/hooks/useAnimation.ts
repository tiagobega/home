import { useAnimation } from '@app/contexts/animation';
import { useEffect, useRef, useState } from 'react';

export const useInstantAnimation = (delay = 0) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), delay);
  }, []);

  return animate;
};

export const useAnimationFrame = (
  animationFunction: (deltaTime: number) => void
) => {
  const { registerAnimation, unregisterAnimation } = useAnimation();

  useEffect(() => {
    registerAnimation(animationFunction);

    return () => {
      unregisterAnimation(animationFunction);
    };
  }, [registerAnimation, unregisterAnimation, animationFunction]);
};

export interface UseOnScreenOptions {
  animation?: {
    type?: 'once' | 'always';
    delay?: number;
  };
  intersection?: IntersectionObserverInit;
}

const useOnScreenAnimate = ({
  animation = {},
  intersection = {},
}: UseOnScreenOptions = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  const { type = 'once', delay = 0 } = animation;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);

      if (type === 'once' && animate) return;
      setTimeout(() => {
        setAnimate(entry.isIntersecting);
      }, delay);
    }, intersection);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [intersection, animation, type, animate, delay]);

  return { animateRef: ref, animate, isIntersecting };
};

export default useOnScreenAnimate;
