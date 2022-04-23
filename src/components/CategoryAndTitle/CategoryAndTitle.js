import React from 'react';

import * as styles from './CategoryAndTitle.module.scss';
const CategoryAndTitle = (props) => {

  return (
    <div className={styles.container}>
      <span>{props.category}</span>
      <h1>{props.title}</h1>
    </div>
  )
}

export default CategoryAndTitle