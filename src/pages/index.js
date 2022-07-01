import React from "react"
// import { graphql } from "gatsby"

// Components
import Meta from "../components/Meta"
import TemplateHomepage from "../templates/Homepage"

const IndexPage = ({data}) => {
  return (
    <>
    <Meta title="Westlink Church of Christ" />
    <TemplateHomepage data={data} />
    </>
  )
}

// export const query = graphql`
//   {
//     contentfulHomepage {
//       title
//       mainImage {
//         description
//         gatsbyImageData(
//           width: 1920
//           placeholder: BLURRED
//           formats: [AUTO, WEBP]
//         )
//       }
//       callToActionBoxes {
//         title
//         content
//         image {
//           description
//           gatsbyImageData(
//             aspectRatio: 1
//             width: 475
//             placeholder: BLURRED
//             formats: [AUTO, WEBP]
//           )
//         }
//       }
//       events {
//         ...Event
//       }
//       metaData {
//         ...ComponentMeta
//       }
//     }
//   }
// `

export default IndexPage


/*
<Website meta={data.metaData} title={data.title} header={true} footer={true}>
      <main>
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
*/