import React, { useState, useEffect } from "react"
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

  useEffect(() => {
    setImage(
      width > 768
        ? getImage(data.featuredImageDesktop)
        : getImage(data.featuredImageMobile)
    )
  }, [width, data.featuredImageDesktop, data.featuredImageMobile])

  return (
    <Website meta={data.metaData} title={data.title} header={true} footer={true}>
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
      pageContent {
        raw
      }
      metaData {
        ...ComponentMeta
      }
    }
  }
`

export default DefaultPageTemplate
