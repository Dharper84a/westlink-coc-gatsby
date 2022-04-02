import React from 'react';
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import ContentfulRichText from "../../components/ContentTypes/RichText"

import * as styles from "./styles.module.scss"

const PersonCard = (props) => {
  console.log(props);

  const isFeatured = props.featured === true ? true : false;
  const hasImage = props.person.portrait ? true : false;
  const image = hasImage ? getImage(props.person.portrait) : null;

  return (
    <div className={styles.personCard}>
      <figure className={styles.portrait}>
        {hasImage && 
        <GatsbyImage
          image={image}
          alt={props?.person?.portrait?.description}
          backgroundColor="#f2f2f2"
        />
        }
        <figcaption>
          <h3>{props?.person?.name}</h3>
          {props?.person?.position}
        </figcaption>
      </figure>
      {isFeatured && props.person && props.person.bio && 
        <div className={styles.bio}>
          <ContentfulRichText richText={props.person.bio} />
        </div>
      }
      
      
    </div>
  )
}

export default PersonCard;

