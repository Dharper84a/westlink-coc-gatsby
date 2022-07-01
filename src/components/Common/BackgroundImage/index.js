import * as React from 'react';
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components'

const _BackgroundImagePart = styled.div`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

const BackgroundImagePart = ({image, imageOptions, className}) => {
  
  const bgImage = getImage(image);
  const defaultOptions = {
    objectFit: 'cover',
  }
  const imageSrc = getSrc(bgImage);
  imageOptions = {...defaultOptions, ...imageOptions};
  console.log('BGImage Source', bgImage);
  console.log('imageOptions', imageOptions);
  console.log('Image Src', imageSrc);
  return (
    <_BackgroundImagePart className={className}>
      <GatsbyImage image={bgImage} {...imageOptions} alt={''}/>
    </_BackgroundImagePart>
  )
}



export default BackgroundImagePart;