import React from 'react'
import {graphql} from 'gatsby'

// Components
import Seo from '../components/seo'
import ParallaxHeader from '../components/ParallaxHeader/ParallaxHeader'
// Template
import TemplateHomepage from '../templates/Homepage'

const IndexPage = ({data: {contentfulHomepage:data}}) => {
  console.log(data);
  return (
    <React.Fragment>
      <Seo title={data.title} />
      <TemplateHomepage displayType="transparent">
        <ParallaxHeader image={data.mainImage} />
      </TemplateHomepage>
    </React.Fragment>
  )
}

export const query = graphql`
{
  contentfulHomepage {
    title
    mainImage {
      description
      title
      file {
        url
      }
    }
  }
}
`
export default IndexPage