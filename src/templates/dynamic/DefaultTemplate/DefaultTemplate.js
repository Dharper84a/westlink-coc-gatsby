import React from "react"
import { graphql } from "gatsby"

// Components
import Website from "../../../components/Layout/Website"
import DefaultLayout from "../../../components/Layout/DefaultLayout/DefaultLayout"

const DefaultPageTemplate = ({ data: { contentfulPageDefault: data } }) => {
  return (
    <Website meta={data.metaData} title={data.title} header={true} footer={true}>
      <main>
        <DefaultLayout {...data} />
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
      image {
        description
        gatsbyImageData
      }
      pageContent {
        raw
      }
      metaData {
        ... on ContentfulComponentMeta {
          ...ComponentMeta
        }

        ... on ContentfulComponentMetaImage {
          ...ComponentMetaImage
        }
      }
    }
  }
`

export default DefaultPageTemplate
