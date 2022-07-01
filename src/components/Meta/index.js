import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = (props) => {
  console.log('meta', props);

  const title = props.basic.title ? `${props.basic.title} — Westlink Church of Christ` : `Westlink Church of Christ`;
  return(
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={props.basic.description || ''} />
    </Helmet>
  )

}

export default Meta;