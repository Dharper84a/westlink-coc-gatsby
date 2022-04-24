import React from 'react';
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"


// Components
import Website from '../../../components/Layout/Website';
import People from '../../../components/People/People';

const PeopleTemplate = ({ data: { contentfulPagePeople: data } }) => {

  const meta = {
    title: data.title,
    description: data?.description,
    og: [
      {
        key: "og:title",
        value: data.title,
      },
      {
        key: "og:description",
        value: data?.description,
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
        <People {...data} />
      </main>
    </Website>
  )
}

export const query = graphql`
  query pagePeople($slug: String) {
    contentfulPagePeople(slug: { eq: $slug }) {
      slug
      title
      contentful_id
      image {
        description
        gatsbyImageData(
          width: 400
          height: 1100
          placeholder: BLURRED
          quality: 80
        )
      }
      content {
        raw
      }
      featuredPerson {
        bio {
          raw
        }
        name
        position
        portrait {
          description
          gatsbyImageData(
            width: 675
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      people {
        bio {
          raw
        }
        name
        position
        portrait {
          description
          gatsbyImageData(
            width: 550
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`

export default PeopleTemplate;