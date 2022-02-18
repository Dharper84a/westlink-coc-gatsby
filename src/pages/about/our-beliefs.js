import React from 'react'
import {graphql} from 'gatsby'
import {getImage} from 'gatsby-plugin-image'

import ContentfulRichTech from '../../components/ContentTypes/RichText'

import {
  TemplateDefault,
  FeaturedImage,
  PageContent
 } from '../../templates/Default';

const OurBeliefs = ({data: {contentfulDefaultModel: data}}) => {

  const hasMainImage = data.mainImage !== undefined ? true : false

  const mainImage = hasMainImage ? getImage(data.mainImage) : null;
 
  return (
    <TemplateDefault
      title={data.title}
      description={data.metaDescription}
    >
      
      {hasMainImage &&
      <FeaturedImage image={mainImage} overlay={data.title} />
      }

      {!hasMainImage && <h1>{data.title}</h1>}
      
      <PageContent>
        <ContentfulRichTech richText={data.content} />
      </PageContent>
    </TemplateDefault>
  )
}

export const query = graphql`
  {
    contentfulDefaultModel {
      content {
        raw
      }
      metaDescription
      mainImage {
        gatsbyImageData(width:1366)
      }
      title
    }
  }
`

export default OurBeliefs