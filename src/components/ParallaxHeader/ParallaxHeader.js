import React, {useEffect, useState, useRef} from "react"

import * as styles from "./ParallaxHeader.module.scss"

const ParallaxHeader = props => {
  const [bgPositionY, setBgPositionY] = useState(50);
  const containerRef = useRef();
  const imageSrc = props.image.images.fallback.src;
  
  const updateParallaxPosition = () => {
    if(typeof window !== 'undefined' && containerRef) {
      const windowScrollY = window.scrollY;
      const containerHeight = containerRef.current.offsetHeight;

      var positionValue = ((windowScrollY / containerHeight) * 50) + 50;
      positionValue = Math.max(50, Math.min(positionValue, 100));

      setBgPositionY(positionValue);

    }
  }
  useEffect(() => {
    window.addEventListener('scroll', updateParallaxPosition);

    return () => { window.removeEventListener('scroll', updateParallaxPosition); }
  }, [])
  return (
    <div ref={containerRef} className={styles.parallaxContainer} style={{backgroundImage: `url(${imageSrc})`, backgroundPositionY: `${bgPositionY}%`}}>
    </div>
  )
}

export default ParallaxHeader
