import React, {useEffect,useState} from 'react';
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentfulRichText from "../../../components/ContentTypes/RichText"
import useWindowDimensions from '../../../hooks/useWindowDimensions';
// Templates
import {
  PeoplePageContainer,
  PeoplePageContent,
  PeopleFeaturedPerson,
  PeoplePersonsContainer,
  PeoplePerson,
} from "../../Templates"

// Components
import Website from '../../../components/Layout/Website';
import VerticalImageHeader from '../../../components/VerticalImageHeader/VerticalImageHeader';

const PeopleTemplate = ({ data: { contentfulPagePeople: data } }) => {
  const [image, setImage] = useState(null)
  const { width } = useWindowDimensions()

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

  useEffect(() => {
    setImage(
      width > 768
        ? getImage(data.desktopImage)
        : getImage(data.mobileImage)
    )
  }, [width, data.desktopImage, data.mobileImage])


  console.log(data);
  return (
    <Website meta={meta} header={true} footer={true}>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <main>
        <PeoplePageContainer>
          <VerticalImageHeader image={image} />

          <PeoplePageContent>
            <h1>{data.title}</h1>
            <ContentfulRichText richText={data.topContent} />

            <PeopleFeaturedPerson>
              <header>
                {data.featuredPerson.portrait &&
                  <GatsbyImage
                    image={getImage(data.featuredPerson.portrait)}
                    alt={data.featuredPerson.portrait?.description}
                  />
                }
              </header>
              <div>
                <span>{data.featuredPerson.position}</span>
                <h2>{data.featuredPerson.name}</h2>
                <ContentfulRichText richText={data.featuredPerson.bio} />
              </div>
            </PeopleFeaturedPerson>
            
            <PeoplePersonsContainer>
              {data.people.length > 0 &&
                data.people.map((person, key) =>{
                  return (
                    <PeoplePerson key={key}>
                      <header>
                      {person.portrait &&
                        <GatsbyImage
                          image={getImage(person.portrait)}
                          alt={person.portrait?.description}
                        />
                      }
                      </header>
                      <div>
                        <span>{person.position}</span>
                        <h2>{person.name}</h2>
                      </div>
                    </PeoplePerson>
                  )
                })
              }
              
            </PeoplePersonsContainer>
          </PeoplePageContent>
         

        </PeoplePageContainer>
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
      desktopImage {
        description
        gatsbyImageData(
          width: 1100
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      mobileImage {
        description
        gatsbyImageData(
          width: 768
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      topContent {
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
            width: 350
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
            width: 350
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`

export default PeopleTemplate;