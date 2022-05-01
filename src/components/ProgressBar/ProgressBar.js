import React, {useEffect, useState} from 'react';


import * as styles from './ProgressBar.module.scss';


const ProgressBar = (props) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if(props.type === 'undetermined') {
      setAnimationClass('fx-progress-undetermined');
    }
  }, [])

  return (
    <div className={styles.progressBar}>
      <div className={`${styles.progressBarValue} ${animationClass}`}></div>
    </div>
  )
}

export default ProgressBar;