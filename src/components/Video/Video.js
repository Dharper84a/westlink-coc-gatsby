import React from 'react';

import * as styles from "./styles.module.scss";
const Video = (props) => {
  const videoSrc = `https://youtube.com/embed/${props.videoId}`;
  return (
    <iframe className={styles.videoFrame} width={props.width ? props.width : '384'} height={props.height ? props.height : '216'} src={videoSrc}></iframe>
  )
}

export default Video;