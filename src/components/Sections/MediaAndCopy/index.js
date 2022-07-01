import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { MediaAndCopyComponent, Content, Media, Heading, Copy } from './styles'
export const MediaAndCopy = (props) => {

  return (
    <MediaAndCopyComponent>
      <Media>
        <StaticImage
          src="../../../../images/Placeholder-1024x768.jpg"
          alt=""
          loading="lazy"
          placeholder="dominantColor"
          aspectRatio={16/9}
        />
      </Media>
      <Content>
        <Heading>
          {props.heading}
        </Heading>
        <Copy>
          {props.copy}
        </Copy>
      </Content>
    </MediaAndCopyComponent>
  )
}

export default MediaAndCopy;
