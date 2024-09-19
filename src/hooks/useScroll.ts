import { useEffect, useRef } from 'react';

export const useScroll = (
  onScrollChange?: (currentScroll: { scrollY: number; scrollX: number }) => void
) => {
  const scrollRef = useRef({
    scrollY: window.scrollY,
    scrollX: window.scrollX,
  });

  const handleScroll = () => {
    scrollRef.current.scrollY = window.scrollY;
    scrollRef.current.scrollX = window.scrollX;

    onScrollChange?.(scrollRef.current);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [onScrollChange]);

  return scrollRef;
};
