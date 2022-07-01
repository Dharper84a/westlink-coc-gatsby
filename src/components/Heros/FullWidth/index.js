import React, { useLayoutEffect, useState } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import {Hero} from './styles';

const HeroFullWidth = () => {
  const [heroHeight, setHeroHeight] = useState(0);
  const [heroYPos, setHeroYPos] = useState(35);
  const bgImage = "https://images.ctfassets.net/1prl2x7l6lxt/7moYpau6M2F04bZT73tGiy/a5cddb73467a61f8f81b3bb75c453a5e/wcoc-building-front-1700x900.jpg?w=1700&h=900&fl=progressive&q=50&fm=jpg";

  const scrollHandler = () => {
    let yScrollPos = (window.scrollY * 0.1) + 35;

    if(yScrollPos > 100) yScrollPos = 100;
    if(yScrollPos < 0) yScrollPos = 0;

    setHeroYPos(yScrollPos.toFixed(1));
  }
  const resizeHandler = () => {
    let targetHeight = window.innerWidth * 0.28;
    setHeroHeight(targetHeight);
  }
  useLayoutEffect(() => {
    resizeHandler();
    scrollHandler();

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('scroll', scrollHandler);
    }
  }, [])
  return (
    <Hero bgImage={bgImage} heroHeight={heroHeight} heroYPos={heroYPos}>
      {/* <StaticImage
        src="../../../images/Placeholder-1920x500.jpg"
        alt=""
        loading="eager"
        placeholder="dominantColor"
        layout="constrained"
        width={1920}
        height={500}
      /> */}
    </Hero>
  )
}

export default HeroFullWidth;