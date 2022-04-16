import React, { useRef, useContext, useState, useCallback, useEffect, useLayoutEffect } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import SiteContext from "../context/SiteContext"
// Components
import Website from "../components/Layout/Website"
import VideoCard from "../components/VideoCard/VideoCard"

// Templates
import {
  DefaultGridContainer,
  DefaultGridItem,
  VideoPageContainer,
  StreamBox
} from "../templates/Templates"
const Live = () => {
  const siteStore = useContext(SiteContext)
  const [isLoading, setIsLoading] = useState(true);
  const [viewerHeight, setViewerHeight] = useState(0);
  const [viewerWidth, setViewerWidth] = useState(0);
  const videoRef = useRef();

  const sermons = useStaticQuery(graphql`
    {
      allContentfulVideoSermons(limit: 3) {
        edges {
          node {
            slug
            title
            videoId
          }
        }
      }
    }
  `)

  const hasSermons =
    sermons.allContentfulVideoSermons.edges.length > 0 ? true : false


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

  const streamViewerHeight = useCallback(() => {
    return viewerWidth * 0.5625;
  },[viewerWidth])

  const setViewerSizes = useCallback(() => {
    setViewerWidth(streamViewerWidth);
    setViewerHeight(streamViewerHeight);
    if(viewerWidth > 0) {
      setViewerHeight(viewerWidth * 0.5625);
      setIsLoading(false);
    }
  },[streamViewerHeight, streamViewerWidth, viewerWidth]);

  useLayoutEffect(() => {
    setViewerSizes();
    return () => {}
  }, [setViewerSizes])
  return (
    <Website meta={meta} header={true} footer={true}>
      <Helmet>
        <title>Live Stream - Westlink Church of Christ</title>
      </Helmet>
      <main ref={videoRef}>
        <VideoPageContainer id="streamViewerWidth">
          <h1>Live Stream</h1>
          <StreamBox>
          <VideoCard videoId="TD-s-Ucwu_s" width={viewerWidth} height={viewerHeight} />
       
          {siteStore.isServiceActive && <div>show live stream</div>}
          {!siteStore.isServiceActive && (
            <div>
              <p>
                Live stream is not active. The stream will automatically load at the appropriate time on this page (you do not have to do anything, but maybe get a cup of coffee or tea).
              </p>
              <p>
                Westlink Church of Christ typcially streams every Sunday between 10am and
                12pm. You can{" "}
                <Link to="/past-sermons" title="Watch past recorded sermons">
                  watch past sermons
                </Link>{" "}
                anytime.
              </p>
            </div>
          )}
          </StreamBox>
          {hasSermons && (
            <DefaultGridContainer>
              {sermons.allContentfulVideoSermons.edges.map((item, key) => {
                return (
                  <DefaultGridItem key={key}>
                    <VideoCard {...item.node} />
                  </DefaultGridItem>
                )
              })}
            </DefaultGridContainer>
          )}
        </VideoPageContainer>
      </main>
    </Website>
  )
}

export default Live
