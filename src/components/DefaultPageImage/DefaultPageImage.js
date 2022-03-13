import React, {useState,useEffect} from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

import useWindowDimensions from '../../hooks/useWindowDimensions'

export const DefaultPageImage = (props) => {
  const [image, setImage] = useState(null)
  const {width} = useWindowDimensions()

  useEffect(() => {
    var _image = width > 768 ? props.desktopImage : props.mobileImage
    setImage(_image)
  }, [width, props.desktopImage, props.mobileImage])
  console.log(width);
  // const image = width > 768 ? props.desktopImage : props.mobileImage

  return (
    <React.Fragment>
      {image &&
        <GatsbyImage
          image={image}
          alt={props.alt}
          backgroundColor={props.backgroundColor}
        />
      }
    </React.Fragment>
    
  )
}
