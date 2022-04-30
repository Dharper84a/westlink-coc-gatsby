import React, {Fragment} from "react"

import * as styles from './VideoCard.module.scss';
const VideoCard = props => {
  const videoSrc = `https://youtube.com/embed/${props.videoId}`
  console.log(props)
  return (
    <Fragment>
      <h2>{props.title}</h2>
      <iframe
         title={props.title}
        className={styles.videoFrame}
        width={props.width ? props.width : "384"}
        height={props.height ? props.height : "216"}
        src={videoSrc}
        style={{maxWidth: props.width ? `${props.width}px` : '100%'}}
      ></iframe>
    </Fragment>
   
  )
}

export default VideoCard
