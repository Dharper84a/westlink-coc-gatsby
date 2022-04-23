import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby"

// Components
import Website from '../../../components/Layout/Website';
import Event from '../../../components/Event/Event';



const EventTemplate = ({ data: { contentfulEvent: data } }) => {
  console.log('event', data);
  const meta = {
    title: data.title,
    description: data.metaPageDescription ? data.metaPageDescription : '',
    og: [
      {
        key: "og:title",
        value: data.metaPageTitle ? data.metaPageTitle : data.title,
      },
      {
        key: "og:description",
        value: data.metaPageDescription ? data.metaPageDescription : '',
      },
      {
        key: "og:type",
        value: "website",
      },
    ],
  }

  return (
    <Website meta={meta} header={true} footer={true}>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
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
      slug
    }
  }`
