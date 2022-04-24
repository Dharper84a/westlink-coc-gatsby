import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Resolvers
import RichText from '../../ContentTypes/RichText';

import * as styles from './PortraitCard.module.scss';

const PortraitCard = (props) => {
  const image = props.portrait ? getImage(props.portrait) : false;
  const featured = props.featured ? true : false;

  return (
    <div className={featured ? styles.cardFeatured : styles.card}>
      {image &&
        <figure className={styles.portrait}>
        <GatsbyImage 
          image={image}
          alt={props.portait?.description}
          width={550}
          height={700}
        />
        </figure>
      }
      {!image &&
        <figure className={styles.portraitPlaceholder}></figure>
      }
      <div className={styles.content}>
          <span>{props.position}</span>
          <h2>{props.name}</h2>
        {featured &&
        <RichText richText={props.bio} />
        }
      </div>
    </div>
  )
}

export default PortraitCard;