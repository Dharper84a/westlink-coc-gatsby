import React, {useState, useRef, useCallback, useLayoutEffect} from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';


// Templates
import {
  DefaultGridContainer,
  DefaultGridItem
} from '../templates/Templates';

// Components
import Website from '../components/Layout/Website';
import VideoCard from '../components/VideoCard/VideoCard';


const Podcasts = ({data: {allContentfulVideoPodcast: data}}) => {
  // const [setViewerHeight] = useState(0);
  const [viewerWidth, setViewerWidth] = useState(0);
  const videoRef = useRef();


  const hasPodcasts =
    data.edges.length > 0 ? true : false


  const meta = {
    title: "Live Stream - Westlink Church of Christ",
    description: "",
    og: [
      {
        key: "og:title",
        value: "Westlink Church of Christs Live Stream",
      },
      {
        key: "og:description",
        value: "",
      },
      {
        key: "og:type",
        value: "website",
      },
    ],
  }

  const streamViewerWidth = useCallback(() => {
    let element = videoRef.current;
    if(element) {
      return element.offsetWidth / 2;
    }
  },[])

  // const streamViewerHeight = useCallback(() => {
  //   return viewerWidth * 0.5625;
  // },[viewerWidth])

  const setViewerSizes = useCallback(() => {
    setViewerWidth(streamViewerWidth);
    // setViewerHeight(streamViewerHeight);
    if(viewerWidth > 0) {
      // setViewerHeight(viewerWidth * 0.5625);
    }
  },[streamViewerWidth, viewerWidth]);

  useLayoutEffect(() => {
    setViewerSizes();
    return () => {}
  }, [setViewerSizes])
  return (
    <Website meta={meta} header={true} footer={true}>
      <Helmet>
        <title>Podcasts - Westlink Church of Christ</title>
      </Helmet>
      <main ref={videoRef}>
        <h1>Podcasts</h1>
        <section>
          {/* <VideoCard videoId="7ty-gUooWXI" width={viewerWidth} height={viewerHeight} /> */}
        </section>
        <section>
          {hasPodcasts && (
            <DefaultGridContainer>
              {data.edges.map((item, key) => {
                return (
                  <DefaultGridItem key={key}>
                    <VideoCard {...item.node} />
                  </DefaultGridItem>
                )
              })}
            </DefaultGridContainer>
          )}
        </section>

        
        
      </main>
    </Website>
  )
}


export const query = graphql`
  {
    allContentfulVideoPodcast {
      edges {
        node {
          slug
          title
          videoId
          contentful_id
        }
      }
    }
  }
`

export default Podcasts