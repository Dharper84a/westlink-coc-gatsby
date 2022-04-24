import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from './VerticleHeader.module.scss';

const VerticleHeader = (props) => {
  console.log(props);
  const images = props.images.map((image) => {
    return getImage(image);
  })
  console.log('images', images);
  const hasMulitpleImages = props.images.length > 1 ? true : false

  return (
    <header className={styles.header}>
      {hasMulitpleImages && 
        <div>Multiple images are not yet supported. Please update the content to only include one image.</div>
      }
      {!hasMulitpleImages &&
        <GatsbyImage 
          image={images[0]}
          alt={props.images[0]?.description}
          width={600}
          height={1100}
          loading="eager"
          className={styles.headerImage}
        />
      }
  
    </header>
  )
}

export default VerticleHeader;