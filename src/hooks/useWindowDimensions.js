import { useState, useEffect, useCallback } from 'react';

export default function useWindowDimensions(ref = null) {

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

export const useElementDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({width: 0, height: 0});

  useEffect(() => {
    if(ref) {
      setDimensions({width: ref.current.offsetWidth, height: ref.current.offsetHeight});
    }
  }, [ref])

  return dimensions;
}