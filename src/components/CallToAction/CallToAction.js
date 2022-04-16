import React, {Fragment} from 'react';

import Card from './Card/Card';

import * as styles from './CallToAction.module.scss';

const CallToAction = (props) => {
console.log(props);
  return (
    <section className={styles.container}>
      {props.items &&
       props.items.map((item, key) => {
         return <Card title={item.title} content={item.content} key={key} />
       }) 
      }
    </section>
  )
}

export default CallToAction