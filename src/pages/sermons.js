import React, {useEffect, useState, useRef, useCallback, useLayoutEffect} from 'react';
import { graphql } from 'gatsby';

// Hooks
import useYouTube from '../hooks/useYouTube';
// Templates
import {
  DefaultGridContainer,
  DefaultGridItem
} from '../templates/Templates';

// Components
import Website from '../components/Layout/Website';
import VideoCard from '../components/VideoCard/VideoCard';
import VideoCardPlaceHolder from '../components/VideoCard/Placeholder';


const Sermons = () => {

  const youTube = useYouTube();
  const [videos, setVideos] = useState();
  const [hasVideos, setHasVideos] = useState(false);

  useEffect(() => {
    youTube.getVideos({maxResults: 12, type: 'video', videoDuration: 'long'}).then((res) => {
      setVideos(res);
    });
  }, []);

  useEffect(() => {
    if(videos) {
      console.log(videos);
      setHasVideos(true);
    }
  }, [videos]);

  return (
    <Website meta={[]} title="Past Sermons" header={true} footer={true}>
      <main>
        <h1>Past Sermons</h1>
        <section>
          {hasVideos ? (
            <DefaultGridContainer>
              {videos.items.map((item, key) => {
                return (
                  <DefaultGridItem key={key}>
                    <VideoCard {...item} videoId={item.id.videoId} title={item.snippet.title} />
                  </DefaultGridItem>
                )
              })}
            </DefaultGridContainer>
          ) : (
            <DefaultGridContainer>
              {new Array(6).fill(null).map((_, key) => {
                return (
                  <DefaultGridItem key={key}>
                    <VideoCardPlaceHolder />
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

export default Sermons