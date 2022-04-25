import { graphql } from "gatsby";

export const fragmentComponentMeta = graphql`
  fragment ComponentMeta on ContentfulComponentMeta {
    title
    contentType
    content {
      content
    }
  }
`;


export const fragmentEvent = graphql`
  fragment Event on ContentfulEvent {
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
`;
