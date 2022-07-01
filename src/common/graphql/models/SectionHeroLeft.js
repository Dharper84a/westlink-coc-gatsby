import { graphql } from "gatsby";

export const fragmentSectionHeroLeft = graphql`
  fragment fragmentSectionHeroLeft on ContentfulSectionHeroLeft {
    title
    heading
    content {
      raw
    }
    image {
      gatsbyImageData(
        width: 1920
        height: 400
        quality: 65
        placeholder: BLURRED
        formats: [AUTO, WEBP]
      )
    }
    sys {
      contentType {
        sys {
          id
        }
      }
    }
  }
`