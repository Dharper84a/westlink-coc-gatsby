import { graphql } from "gatsby";

export const fragmentComponentMeta = graphql`
  fragment ComponentMeta on ContentfulComponentMeta {
    title
    contentType
    content {
      content
    }
    internal {
      type
    }
  }
`;

export const fragmentComponentMetaImage = graphql`
  fragment ComponentMetaImage on ContentfulComponentMetaImage {
    title
    image {
      description
      gatsbyImageData
    }
    internal {
      type
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
          description
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
