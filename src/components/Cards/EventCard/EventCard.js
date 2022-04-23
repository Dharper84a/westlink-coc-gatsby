import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

import ExcerptFromRichText from '../../ContentTypes/ExcerptFromRichText';
import * as styles from './EventCard.module.scss';

const EventCard = (event) => {

  console.log(event);

  const images = event.image.map((image) => {
    return getImage(image);
  })

  const hasMulitpleImages = event.image.length > 1 ? true : false

  return (
    <div className={styles.card}>
        {hasMulitpleImages &&
          <div>load slider not implemented use one image for now</div>
        }
        {!hasMulitpleImages &&
        
          <GatsbyImage 
            image={images[0]}
            alt="event image"
          />

        }
        
        
        <h3>{event.title}</h3>
        <ExcerptFromRichText richText={event.content} />
        <Link to={`/event/${event.slug}`}>Details</Link>
      </div>
  );
}

export default EventCard;