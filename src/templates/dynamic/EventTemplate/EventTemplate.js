import React from 'react';
import { graphql } from "gatsby"

// Components
import Website from '../../../components/Layout/Website';
import Event from '../../../components/Event/Event';



const EventTemplate = ({ data: { contentfulEvent: data } }) => {
  console.log('event', data);

  return (
    <Website meta={data.metaData} title={data.title} header={true} footer={true}>
      <main>
        <Event {...data} />
      </main>
    </Website>
  );
}

export default EventTemplate;

export const query = graphql`
  query event($slug: String) {
    contentfulEvent(slug: { eq: $slug }) {
      title
      eventDate (
        formatString: "M/D/Y",
        fromNow: true
      )
      content {
        raw
      }
      eventLocation {
        lat
        lon
      }
      image {
        gatsbyImageData (
          placeholder: BLURRED
        )
        description
      }
      metaData {
        ...ComponentMeta
      }
      slug
    }
  }`
