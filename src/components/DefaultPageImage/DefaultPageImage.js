import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

import useWindowDimensions from '../../hooks/useWindowDimensions'

export const DefaultPageImage = (props) => {
  const {width} = useWindowDimensions()
  console.log(width);
  const image = width > 768 ? props.desktopImage : props.mobileImage

  return (
    <GatsbyImage
      image={image}
      alt={props.alt}
      backgroundColor={props.backgroundColor}
    />
  )
}
