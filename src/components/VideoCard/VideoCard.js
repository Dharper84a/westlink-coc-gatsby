import React, {useState, useRef, useEffect} from "react"

import {useElementDimensions} from '../../hooks/useWindowDimensions';

import * as styles from './VideoCard.module.scss';

function decodeHtml(str)
{
  if(typeof str === 'undefined') return '';
    var map =
    {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'",
        '&#39;': "'",
    };
    return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;|&#39;/g, function(m) {return map[m];});
}

const VideoCard = props => {
  const videoContainerRef = useRef();
  const containerDimensions = useElementDimensions(videoContainerRef);
  const [aspectHeight, setAspectHeight] = useState(0);

  const videoSrc = `https://youtube.com/embed/${props.videoId}`
 

  const title = decodeHtml(props.title);
  useEffect(() => {
    let value = containerDimensions.width * 0.56;
    console.log(containerDimensions);
    console.log('value', value);
    setAspectHeight(value);
    
  }, [containerDimensions]);
  return (
    <div ref={videoContainerRef} className={styles.videoCardContainer}>
      <h2>{title}</h2>
      {props.maxWidth ? (
        <iframe
          title={props.title}
          className={styles.videoFrame}
          width={containerDimensions.width}
          height={aspectHeight}
          src={videoSrc}
          style={{maxWidth: '100%'}}
        ></iframe>
      ) : (
        <iframe
          title={props.title}
          className={styles.videoFrame}
          width={props.width ? props.width : "384"}
          height={props.height ? props.height : "216"}
          src={videoSrc}
          style={{maxWidth: props.width ? `${props.width}px` : '100%'}}
        ></iframe>
      )}
      
    </div>
   
  )
}

export default VideoCard
