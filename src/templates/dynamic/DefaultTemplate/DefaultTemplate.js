import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentfulRichText from "../../../components/ContentTypes/RichText"

// Hooks
import useWindowDimensions from "../../../hooks/useWindowDimensions"

// Templates
import {
  DefaultPageContainer,
  DefaultPageContent,
  DefaultPageMedia,
} from "../../Templates"

// Components
import Website from "../../../components/Layout/Website"

const DefaultPageTemplate = ({ data: { contentfulPageDefault: data } }) => {
  const [image, setImage] = useState(null)
  const { width } = useWindowDimensions()
  
  console.log(data)
  const meta = {
    title: data.title,
    description: data.metaPageDescription ? data.metaPageDescription : '',
    og: [
      {
        key: "og:title",
        value: data.metaPageTitle ? data.metaPageTitle : data.title,
      },
      {
        key: "og:description",
        value: data.metaPageDescription ? data.metaPageDescription : '',
      },
      {
        key: "og:type",
        value: "website",
      },
    ],
  }

  useEffect(() => {
    setImage(
      width > 768
        ? getImage(data.featuredImageDesktop)
        : getImage(data.featuredImageMobile)
    )
  }, [width, data.featuredImageDesktop, data.featuredImageMobile])

  return (
    <Website meta={meta} header={true} footer={true}>
      <Helmet>
        <title>{data.metaPageTitle}</title>
      </Helmet>
      <main>
        <DefaultPageContainer>
          <DefaultPageMedia>
            {image && (
              <GatsbyImage
                image={image}
                alt={data.featuredImageDesktop?.description}
              />
            )}
          </DefaultPageMedia>
          <DefaultPageContent>
            
            <h1>{data.title}</h1>
            <div>
              <ContentfulRichText richText={data.pageContent} />
            </div>
          </DefaultPageContent>
        </DefaultPageContainer>
      </main>
    </Website>
  )
}

export const query = graphql`
  query pageDefault($slug: String) {
    contentfulPageDefault(slug: { eq: $slug }) {
      slug
      title
      contentful_id
      featuredImageDesktop {
        description
        gatsbyImageData
      }
      featuredImageMobile {
        description
        gatsbyImageData
      }
      metaPageDescription
      metaPageTitle
      pageContent {
        raw
      }
    }
  }
`

export default DefaultPageTemplate
