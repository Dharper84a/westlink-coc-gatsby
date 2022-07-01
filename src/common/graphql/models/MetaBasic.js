import { graphql } from "gatsby";

export const fragmentMetaBasic = graphql`
  fragment fragmentMetaBasic on ContentfulMetaBasic {
    title
    description {
      description
    }
  }
`