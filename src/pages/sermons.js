import React, {useState, useRef, useCallback, useLayoutEffect} from 'react';
import { graphql } from 'gatsby';


// Templates
import {
  DefaultGridContainer,
  DefaultGridItem
} from '../templates/Templates';

// Components
import Website from '../components/Layout/Website';
import VideoCard from '../components/VideoCard/VideoCard';


const Sermons = ({data: {allContentfulVideoSermons: data}}) => {
  // const [setViewerHeight] = useState(0);
  const [viewerWidth, setViewerWidth] = useState(0);
  const videoRef = useRef();


  const hasSermons =
    data.edges.length > 0 ? true : false

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
    <Website meta={[]} title="Past Sermons" header={true} footer={true}>
      <main ref={videoRef}>
        <h1>Past Sermons</h1>
        <section>
          {/* <VideoCard videoId="7ty-gUooWXI" width={viewerWidth} height={viewerHeight} /> */}
        </section>
        <section>
          {hasSermons && (
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
    allContentfulVideoSermons {
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

export default Sermons