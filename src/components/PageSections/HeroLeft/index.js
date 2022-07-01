import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentfulRichText from '../../ContentTypes/RichText';

import { PaddedContent } from "../../Layout/Content"

import { _HeroLeft, _Layout, _Image, _Copy, _Heading, _Content, _Spacer, } from "./styles"

const HeroLeft = props => {
  const image = getImage(props.image)
  
  return (
    <_HeroLeft>
      <_Image>
          <GatsbyImage image={image} alt={""} width={1920} height={400} objectFit="cover" style={{height:"400px"}} imgStyle={{height:"400px"}} />
      </_Image>
      <_Layout>
        <_Copy>
          <_Heading>{props.heading}</_Heading>
          <_Content>
            <ContentfulRichText richText={props.content} />
          </_Content>
        </_Copy>
        
      </_Layout>
      <PaddedContent>
        <p>padded content alignment</p>
        
        
      </PaddedContent>
    </_HeroLeft>
  )
}

export default HeroLeft
