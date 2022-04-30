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


const Podcasts = () => {

  const youTube = useYouTube();
  const [videos, setVideos] = useState();
  const [hasVideos, setHasVideos] = useState(false);

  useEffect(() => {
    youTube.getPlaylist({maxResults: 12}).then((res) => {
      console.log(res);
      setVideos(res);
      // PLDo_r1N43g0GDBsE1_vQwA0TbYcU31TL8
    });
    // youTube.getVideos({maxResults: 12, type: 'video', videoDuration: 'medium'}).then((res) => {
    //   setVideos(res);
    // });
  }, []);

  useEffect(() => {
    if(videos) {
      setHasVideos(true);
    }
  }, [videos]);

  return (
    <Website meta={[]} title="Daily Devotional Podcasts" header={true} footer={true}>
      <main>
        <h1>Daily Devotional Podcasts</h1>
        <section>
          {hasVideos ? (
            <DefaultGridContainer>
              {videos.items.map((item, key) => {
                return (
                  <DefaultGridItem key={key}>
                    <VideoCard {...item} videoId={item.snippet.resourceId.videoId} title={item.snippet.title} />
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

export default Podcasts