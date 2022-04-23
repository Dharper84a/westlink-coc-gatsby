import React from "react"
import { graphql } from "gatsby"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

// Templates
import { CallToActionContainerTemplate, UpcomingEventsContainerTemplate } from "../templates/Templates";
// Components
import Website from "../components/Layout/Website"

import ParallaxHeader from "../components/ParallaxHeader/ParallaxHeader"
import CallToAction from "../components/CallToAction/CallToAction"
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents"
import EventCard from "../components/Cards/EventCard/EventCard";


const IndexPage = ({ data: { contentfulHomepage: data } }) => {
  console.log(data)
  const meta = {
    title: data.title,
    description: data?.description,
    og: [
      {
        key: "og:title",
        value: data.title,
      },
      {
        key: "og:description",
        value: data?.description,
      },
      {
        key: "og:type",
        value: "website",
      },
    ],
  }

  console.log(data)

  const image = data.mainImage.gatsbyImageData;
  const bgImage = convertToBgImage(image);
  return (
    <Website meta={meta} header={true} footer={true}>
      <main>
        <BackgroundImage
          Tag="section"
          {...bgImage}
          preserveStackingContext
        >
          <ParallaxHeader image={image} />

        </BackgroundImage>
        {/* <ParallaxHeader imageUrl={data.mainImage.file.url} /> */}

        <section>
          <CallToActionContainerTemplate>
          {
            data.callToActionBoxes.map((cta, key) => {
              return (
                <CallToAction {...cta} key={key} />
              )
            })
          }
          </CallToActionContainerTemplate>
        </section>
       
        
        <section>
          <h2>Upcoming Events</h2>
          <UpcomingEventsContainerTemplate>
            {
              data.events.map((event, key) => {
                return (
                  <EventCard {...event} key={key} />
                )
              })
            }
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
          gatsbyImageData(
            aspectRatio: 1,
            width: 200,
            placeholder: BLURRED,
            formats: [AUTO, WEBP]
          )
        }
      }
      events {
        title
        content {
          raw
        }
        image {
          gatsbyImageData(
            width: 600,
            height: 200,
            placeholder: BLURRED,
            formats: [AUTO, WEBP]
          )
        }
        slug
      }
    }
  }
`
// export const query = graphql`
//   {
//     contentfulHomepage {
//       title
//       mainImage {
//         description
//         title
//         file {
//           url
//         }
//       }
//     }
//   }
// `
export default IndexPage
