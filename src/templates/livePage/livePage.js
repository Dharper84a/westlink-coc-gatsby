import React, { useEffect, useState, useCallback } from 'react';

import * as styles from "./styles.module.scss";


import Video from '../../components/Video/Video';
const LivePageTemplate = (props) => {
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [viewerWidth, setViewerWidth] = useState(0);
  const [viewerHeight, setViewerHeight] = useState(0);

  console.log(props.data)

  const isLiveHandler = useCallback(() => {
    let d = new Date();
    
    if(d.getDay() === 0) {
      if(d.getHours() >= 10 && d.getHours() < 12) {
        setIsLive(true);
      } else {
        setIsLive(false);
      }
    }
  },[]);

  const streamViewerWidth = useCallback(() => {
    let element = document.getElementById('streamViewerWidth');
    if(element) {
      return element.offsetWidth - 96;
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

  useEffect(() => {
    setViewerSizes();
    let isLiveTimer = setInterval(() => {
      isLiveHandler()
    }, 1000);

    return () => { 
      clearInterval(isLiveTimer);
    }
  }, [streamViewerHeight, streamViewerWidth, isLiveHandler, setViewerSizes])
  
  return (
    <main className={styles.pageContent} id="streamViewerWidth">
   
      <section className="stream">
        <h1>Westlink Church of Christ Live Stream</h1>
        {isLive && !isLoading &&
        <Video videoId="5JTkoA3dQ1g" width={viewerWidth} height={viewerHeight} />
        }
        {isLive && isLoading && 
        <div className={styles.streamPlaceholder}>
          <p>Loading...</p>
        </div>
        }
        {!isLive &&
        <p className={styles.notice}>Live stream is available between 10am to 12pm every Sunday</p>
        }
        
      </section>

      <section className="videos">
        <h2>Past Sermons</h2>
        <div className={styles.videoGrid}>
          {props.data && 
            props.data.map((video, key) => {
              return <Video videoId={video.node.videoId} key={key} />
            })
          }
        </div>
      </section>
    </main>
  )
}

export default LivePageTemplate;