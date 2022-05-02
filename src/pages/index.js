import React from "react"
import { graphql } from "gatsby"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

// Templates
import {
  CallToActionContainerTemplate,
  UpcomingEventsContainerTemplate,
} from "../templates/Templates"

// Components
import Website from "../components/Layout/Website"

import ParallaxHeader from "../components/ParallaxHeader/ParallaxHeader"
import CallToAction from "../components/CallToAction/CallToAction"
import EventCard from "../components/Cards/EventCard/EventCard"

const IndexPage = ({ data: { contentfulHomepage: data } }) => {
  const image = data.mainImage.gatsbyImageData
  const bgImage = convertToBgImage(image)
  return (
    <Website meta={data.metaData} title={data.title} header={true} footer={true}>
      <main>
        {/* <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
          <ParallaxHeader image={image} />
        </BackgroundImage> */}
        <ParallaxHeader image={image} />

        <section>
          <CallToActionContainerTemplate>
            {data.callToActionBoxes.map((cta, key) => {
              return <CallToAction {...cta} key={key} />
            })}
          </CallToActionContainerTemplate>
        </section>

        <section>
          <h2>Upcoming Events</h2>
          <UpcomingEventsContainerTemplate>
            {data.events.map((event, key) => {
              return <EventCard {...event} key={key} />
            })}
          </UpcomingEventsContainerTemplate>
        </section>
      </main>
    </Website>
  )
}

export const query = graphql`
  {
    contentfulHomepage {
      title
      mainImage {
        description
        gatsbyImageData(
          width: 1920
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      callToActionBoxes {
        title
        content
        image {
          description
          gatsbyImageData(
            aspectRatio: 1
            width: 475
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      events {
        ...Event
      }
      metaData {
        ...ComponentMeta
      }
    }
  }
`

export default IndexPage
