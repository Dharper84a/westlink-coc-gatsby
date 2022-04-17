import React, {Fragment} from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from './VerticalImageHeader.module.scss';

const VerticalImageHeader = props => {
  return (
    <Fragment>
      {props.image && (
        <GatsbyImage
          image={props.image}
          alt={props?.alt}
          className={styles.verticalImageContainer}
        />
      )}
    </Fragment>
  )
}

export default VerticalImageHeader;