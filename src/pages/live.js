import React from 'react';
import { graphql } from 'gatsby';
import Website from "../templates/Website"
import Header from "../templates/Header"
import Footer from "../templates/Footer"


import LivePageTemplate from "../templates/livePage/livePage"

const Live = ({data}) => {

  return (
    <Website>
      <Header />
        <LivePageTemplate data={data?.allContentfulVideoSermons?.edges} />
      <Footer />
    </Website>
  );
}

export const query = graphql`
  {
    allContentfulVideoSermons(limit:3) {
      edges {
        node {
          title
          slug
          videoId
          contentful_id
        }
      }
    }
  }
`

export default Live;