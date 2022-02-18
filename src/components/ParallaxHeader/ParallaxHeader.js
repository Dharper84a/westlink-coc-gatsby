import React from "react"

import * as styles from "./ParallaxHeader.module.css"

const ParallaxHeader = props => {
  const inlineStyles = {
    backgroundImage: `url(${props.image.file.url})`,
  }
  return (
    <div className={styles.parallaxContainer} style={inlineStyles}>
      {/* <img
        alt='' 
        src={props.image.file.url}
        aria-hidden="true"
      /> */}
    </div>
  )
}

export default ParallaxHeader
