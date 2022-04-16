import React from "react"

import * as styles from "./ParallaxHeader.module.scss"

const ParallaxHeader = props => {
  const inlineStyles = {
    backgroundImage: `url(${props.imageUrl})`,
  }
  return (
    <div className={styles.parallaxContainer} style={inlineStyles}></div>
  )
}

export default ParallaxHeader
