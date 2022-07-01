import * as React from "react"

// Content
import { graphql } from "gatsby"
// import { fragmentSectionHeroLeft } from "../common/graphql/models/SectionHeroLeft"

// Template
import PageTemplate from "../templates/Page"
const Page = props => {
  console.log('Page Route Props', props)
  return <PageTemplate {...props.data} />
}

export default Page

export const query = graphql`
  query($id: String) {
    page: contentfulPage(id: {eq: $id}) {
      title
      pageSections {
        ... on ContentfulSectionHeroLeft {
          ...fragmentSectionHeroLeft
        }
      }
    }
    metaBasic: contentfulMetaBasic(page: {elemMatch: {id: {eq: $id}}}) {
      title
      description {
        description
      }
    }
    metaImage: contentfulMetaImage(page: {elemMatch: {id: {eq: $id}}}) {
      title
      image {
        gatsbyImageData(
          width: 1300
          height: 1000
          quality: 65
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
    