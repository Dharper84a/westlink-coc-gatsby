import React, { useRef, useContext, useState, useCallback, useLayoutEffect, useEffect } from "react"
import { Link } from "gatsby"

import useYouTube from "../hooks/useYouTube"
import SiteContext from "../context/SiteContext"

// Components
import Website from "../components/Layout/Website"
import VideoCard from "../components/VideoCard/VideoCard"
import VideoCardPlaceHolder from "../components/VideoCard/Placeholder";
import ProgressBar from "../components/ProgressBar/ProgressBar"

// Templates
import {
  DefaultGridContainer,
  DefaultGridItem,
  VideoPageContainer,
  StreamBox
} from "../templates/Templates"

const Live = () => {
  const siteStore = useContext(SiteContext)
  const youTube = useYouTube();
  const [youTubeVideos, setYouTubeVideos] = useState();
  const [youTubeLiveVideo, setYouTubeLiveVideo] = useState();
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasVideos, setHasVideos] = useState(false);
  
  const refreshInterval = 15000;

  useEffect(() => {
    youTube.getVideos({maxResults: 3, type: 'video', videoDuration: 'long'}).then((res) => {
      setYouTubeVideos(res);
    });
  }, []);

  useEffect(() => {
    console.log('Videos', youTubeVideos);
    if(youTubeVideos) {
      setHasVideos(youTubeVideos.items.length > 0);
    }
    
    if(youTubeLiveVideo && siteStore.isServiceActive) {
      if(youTubeLiveVideo.items.length > 0) {
        setIsStreaming(true);
      } else {
    
        setTimeout(() => {
          youTube.getLive().then((res) => { setYouTubeLiveVideo(res); });
        },refreshInterval);
      }
    } else {
      setIsStreaming(false);
    }
  }, [youTubeVideos, youTubeLiveVideo])

  useEffect(() => {
    if(siteStore.isServiceActive) {
      youTube.getLive().then((res) => { setYouTubeLiveVideo(res); });
    }
  }, [siteStore.isServiceActive])

  return (
    <Website meta={[]} title="Live Stream" header={true} footer={true}>
      <main>
        <VideoPageContainer id="streamViewerWidth">
          <h1>Live Stream</h1>
          <StreamBox>
          
       
          {siteStore.isServiceActive ? (
            isStreaming ? (
              <VideoCard videoId={youTubeLiveVideo.items[0].id.videoId} maxWidth={true}/>
            ) : (
              <>
              <p>The live service should be starting shortly. This page will update once the live service begins.</p>
              <ProgressBar type="undetermined" />
              </>
            )
          ) : (
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
          )
          
          }
        
          </StreamBox>
          {hasVideos ? (
            <DefaultGridContainer>
              {youTubeVideos.items.map((item, key) => {
                return (
                  <DefaultGridItem key={key}>
                    <VideoCard {...item} videoId={item.id.videoId} title={item.snippet.title} />
                  </DefaultGridItem>
                )
              })}
            </DefaultGridContainer>
          ) : (
            <DefaultGridContainer>
              {new Array(3).fill(null).map((_, key) => {
                return (
                  <DefaultGridItem key={key}>
                    <VideoCardPlaceHolder />
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
