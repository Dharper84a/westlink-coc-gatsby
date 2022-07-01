import { graphql } from "gatsby";

export const fragmentMetaImage = graphql`
  fragment fragmentMetaImage on ContentfulMetaImage {
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
`