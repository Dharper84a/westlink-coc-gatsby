import React from 'react';
import { graphql } from 'gatsby';
import Website from "../templates/Website"
import Header from "../templates/Header"
import Footer from "../templates/Footer"


import VideosPageTemplate from "../templates/videosPage/videosPage"

const PodCasts = ({data}) => {

  return (
    <Website>
      <Header />
        <VideosPageTemplate title="Pod Casts" data={data?.allContentfulVideoSermons?.edges} />
      <Footer />
    </Website>
  );
}

export const query = graphql`
  {
    allContentfulVideoSermons {
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

export default PodCasts;