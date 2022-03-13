import { useState, useEffect, useCallback } from 'react';

export default function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';

  const memo = useCallback(() => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }, [hasWindow])


  const [windowDimensions, setWindowDimensions] = useState(memo());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(memo());
      }
      handleResize()
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow, memo]);

  return windowDimensions;
}