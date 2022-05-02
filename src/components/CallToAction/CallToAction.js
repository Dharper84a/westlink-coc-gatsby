import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "./CallToAction.module.scss"

const CallToAction = props => {
  const image = getImage(props.image)
  return (
    <div className={`${styles.ctaCard} fx-cta-card-slidein`}>
      <GatsbyImage image={image} alt={props.image?.description} className={styles.ctaImage}/>
      <div className={styles.ctaCardContent}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default CallToAction
