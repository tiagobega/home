import { useEffect, useState } from 'react';

export const BREAKPOINT_SIZE = {
  MOBILE: 768,
  TABLET: 1024,
} as const;

interface useWindowSizeOptions {
  mobileBreakpoint?: number;
  tabletBreakpoint?: number;
}

export const useWindowSize = ({
  mobileBreakpoint = BREAKPOINT_SIZE.MOBILE,
  tabletBreakpoint = BREAKPOINT_SIZE.TABLET,
}: useWindowSizeOptions = {}) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const isMobile = windowSize.width <= mobileBreakpoint;
  const isTablet = windowSize.width <= tabletBreakpoint;
  const isDesktop = !isMobile && !isTablet;

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    ...windowSize,
    mobileBreakpoint,
    tabletBreakpoint,
    isMobile,
    isDesktop,
    isTablet,
  };
};
