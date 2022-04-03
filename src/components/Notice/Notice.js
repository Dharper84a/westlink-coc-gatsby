import React from 'react';

import * as styles from './styles.module.scss';
const Notice = (props) => {

  return (
    <div className={styles.noticeBox}>
      <p>{props.children}</p></div>
  )
}

export default Notice