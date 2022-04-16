import React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

// Components
import Website from "../components/Layout/Website"

import ParallaxHeader from "../components/ParallaxHeader/ParallaxHeader"
import CallToAction from "../components/CallToAction/CallToAction"
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents"
// import Seo from "../components/seo"
// import ParallaxHeader from "../components/ParallaxHeader/ParallaxHeader"
// import Notice from "../components/Notice/Notice"
// import LiveBanner from "../components/LiveBanner/LiveBanner"
// import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents.js"
// // Template
// import TemplateHomepage from "../templates/Homepage"

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

  const ctaItems = [
    {
      image: "https://via.placeholder.com/300x300?text=FPO+CTA",
      title: "Visit Westlink Church of Christ",
      content:
        "No matter what level of devotion you have towards God and his word. We would love for you to come visit - come as you are. There is no judgement on material things here, what really matters is what is inside.",
    },
    {
      image: "https://via.placeholder.com/300x300?text=FPO+CTA",
      title: "Sunday Service",
      content:
        "Service starts at 10am to 12pm. We do typically stay a little later to socialize, or groups may take time after service to have lunch together.",
    },
  ]

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

        {/* <GatsbyImage image={image} style={{backgroundAttachment:'fixed'}} /> */}
        </BackgroundImage>
        {/* <ParallaxHeader imageUrl={data.mainImage.file.url} /> */}

        <CallToAction items={ctaItems} />

        <UpcomingEvents />
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
