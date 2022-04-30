import React from 'react';

import * as styles from './VideoCard.module.scss';

const VideoCardPlaceHolder = (props) => {
  const style = {
    width: props.width ? props.width : 'auto',
    height: props.height ? props.height : 216,
  };

  return (
    <div className={styles.placeholder} style={style}></div>
  )
}

export default VideoCardPlaceHolder;