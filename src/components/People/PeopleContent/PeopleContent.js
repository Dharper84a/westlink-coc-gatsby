import React from 'react';

// Resolvers
import RichText from '../../ContentTypes/RichText';

// Styles
import * as styles from './PeopleContent.module.scss';

// Components
import PortraitCard from '../../Cards/PortraitCard/PortraitCard';


const PeopleContent = (props) => {
  return (
    <section>
      
      <RichText richText={props.content} />

      <div className={styles.featuredPerson}>
        <PortraitCard {...props.featuredPerson} featured={true} />
      </div>
      <div className={styles.grid}>
        {
          props.people.map((person, key) => {
            return <PortraitCard {...person} key={key} />
          })
        }

      </div>
    </section>
  )
}

export default PeopleContent;