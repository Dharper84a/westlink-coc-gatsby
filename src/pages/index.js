import React, {useState, useEffect, useCallback} from 'react'
import {graphql, Link} from 'gatsby'

// Components
import Seo from '../components/seo'
import ParallaxHeader from '../components/ParallaxHeader/ParallaxHeader'
import Notice from '../components/Notice/Notice'
// Template
import TemplateHomepage from '../templates/Homepage'

const IndexPage = ({data: {contentfulHomepage:data}}) => {
  const [isLive, setIsLive] = useState(false);

  const isLiveHandler = useCallback(() => {
    let d = new Date();
    console.log('isLiveHandler')
    if(d.getDay() === 0) {
      if(d.getHours() >= 10 && d.getHours() < 12) {
        console.log('is live')
        setIsLive(true);
      } else {
        setIsLive(false);
      }
    }
  },[]);

  useEffect(() => {
    isLiveHandler()
    return () => {}
  }, [isLiveHandler])
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