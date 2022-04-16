import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import * as styles from "./ParallaxHeader.module.scss"

const ParallaxHeader = props => {
  const inlineStyles = {
    backgroundImage: `url(${props.imageUrl})`,
  }
  return (
    <div className={styles.parallaxContainer}>
      <GatsbyImage image={props.image} />
    </div>
  )
}

export default ParallaxHeader
