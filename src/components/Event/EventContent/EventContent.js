import React from 'react';

// Resolvers
import RichText from '../../ContentTypes/RichText';

const EventContent = (props) => {

  return (
    <section>
      <p><strong>Event Date:</strong> {props.date}</p>
      <RichText richText={props.content} />
    </section>
  )
}

export default EventContent;