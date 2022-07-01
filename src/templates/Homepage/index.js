import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Components
import DefaultStructure, { PaddedContent } from "../Default"
import HeroFullWidth from "../../components/Heros/FullWidth"
import BroadcastingNotice from "../../components/Notices/Broadcasting"
import MediaAndCopy from "../../components/Sections/MediaAndCopy"
import Slider from "../../components/Slider"
import DividedSides from "../../components/Sections/DividedSides"
import InfoAndResources from "../../components/Sections/InfoAndResources"
import CardContainer from "../../components/Sections/CardContainer"

// Placeholders
import "../../images/Placeholder-1024x768.jpg"

const TemplateHomepage = props => {
  const rightBGImage =
    "https://images.ctfassets.net/1prl2x7l6lxt/7mdwhq7iTeSktQyFqjc64j/98a384204449a2742dc8e2576e5110e2/park.jpg"

  const infoBGImage =
    "https://images.ctfassets.net/1prl2x7l6lxt/6zNIY5NBB8pDEzbNOsJfY/a3b49e80d26f025dc74387b10866ab47/church-pews.jpg"
  const items = [
    {
      heading: "Community Clean Up",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non euismod lectus. Suspendisse a tortor in urna volutpat dignissim. Praesent feugiat, augue at imperdiet condimentum, mi augue sollicitudin dui, in tristique sapien urna vitae purus sed.",
      image: infoBGImage,
      href: false,
    },
    {
      heading: "Community Clean Up",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non euismod lectus. Suspendisse a tortor in urna volutpat dignissim. Praesent feugiat, augue at imperdiet condimentum, mi augue sollicitudin dui, in tristique sapien urna vitae purus sed.",
      image: rightBGImage,
      href: false,
    },
    {
      heading: "Community Clean Up",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non euismod lectus. Suspendisse a tortor in urna volutpat dignissim. Praesent feugiat, augue at imperdiet condimentum, mi augue sollicitudin dui, in tristique sapien urna vitae purus sed.",
      image: infoBGImage,
      href: false,
    },
  ]
  
  return (
    <DefaultStructure>
      <DividedSides
        type="media-and-text"
        image={rightBGImage}
        heading="Community pickup evening at Sedgwick County Park"
        copy="Westlink members spent Wednesday evening at Sedgwick County Park having dinner together and picking trash around the park."
        hrefDetails="#"
        hrefDetailsLabel="Event Details"
        hrefOther="#"
        hrefOtherLabel="More Events Link This"
      />
      <InfoAndResources
        type="info"
        image={infoBGImage}
        heading="Values and Family"
        copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non euismod lectus. Suspendisse a tortor in urna volutpat dignissim. Praesent feugiat, augue at imperdiet condimentum, mi augue sollicitudin dui, in tristique sapien urna vitae purus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non euismod lectus. Suspendisse a tortor in urna volutpat dignissim. Praesent feugiat, augue at imperdiet condimentum, mi augue sollicitudin dui, in tristique sapien urna vitae purus sed."
        links={[
          {
            label: "Our Beliefs",
            href: "#",
          },
          {
            label: "Our Groups",
            href: "#",
          },
          {
            label: "Our Community",
            href: "#",
          },
        ]}
      />
      <PaddedContent>
        <CardContainer items={items} heading="Upcoming Events" type="event" />
      </PaddedContent>
    </DefaultStructure>
  )
}

export default TemplateHomepage
