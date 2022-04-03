import React from 'react';

import * as styles from "./styles.module.scss";


import Video from '../../components/Video/Video';
const VideosPageTemplate = (props) => {
  
  return (
    <main className={styles.pageContent} id="streamViewerWidth">

      <section className="videos">
        <h1>{props.title}</h1>
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

export default VideosPageTemplate;