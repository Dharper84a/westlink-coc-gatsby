import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import {
  EventCardComponent,
  Content,
  EventImage,
  EventHeading,
  EventCaption,
} from "./styles"

const EventCard = props => {
  const [cardImage, setCardImage] = useState(null);

  useEffect(() => {
    setCardImage(props.image);
  }, [])
  console.log(props.image);
  return (
    <EventCardComponent>
      <Link to="#">
        <EventImage>
          {cardImage &&
          
          <StaticImage
            src="../../../images/Placeholder-1024x768.jpg"
            alt=""
            loading="lazy"
            placeholder="dominantColor"
            aspectRatio={16/9}
          />
}
        </EventImage>
        <Content>
          <EventHeading>{props.heading}</EventHeading>
          <EventCaption>{props.caption || ""}</EventCaption>
        </Content>
      </Link>
    </EventCardComponent>
  )
}

export default EventCard

// 558