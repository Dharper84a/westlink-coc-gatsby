import React from 'react';

import * as styles from './Card.module.scss';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>

      </div>
      <div className={styles.content}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Card