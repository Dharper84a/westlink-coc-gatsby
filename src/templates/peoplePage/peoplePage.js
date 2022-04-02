import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import ContentfulRichText from "../../components/ContentTypes/RichText"

import Website from "../Website"
import Header from "../Header"
import Footer from "../Footer"
import PersonCard from "../../components/PersonCard/PersonCard"

import { DefaultPageImage } from "../../components/DefaultPageImage/DefaultPageImage"

import * as styles from "./styles.module.scss"

const peoplePageTemplate = ({ data: { contentfulPagePeople: data } }) => {
  console.log(data)

  const desktopImage = getImage(data.desktopImage)
  const mobileImage = getImage(data.mobileImage)

  return (
    <Website>
      <Header />
      <main className={styles.pageContent}>
        <header>
          <DefaultPageImage
            desktopImage={desktopImage}
            mobileImage={mobileImage}
            alt=''
            backgroundColor="#f2f2f2"
          />
        </header>

        <section>
          <h1>{data.title}</h1>
          <div>
            <ContentfulRichText richText={data.topContent} />
          </div>
          <div>
            <PersonCard person={data.featuredPerson} featured={true} />
          </div>
          
            {data.people.length &&
            <div className={styles.peopleGrid}>
            {data.people.map((person, key) => {
              return <PersonCard person={person} key={key} />
            })}
            </div>
            }
          
        </section>

        {/* <aside>LINKED ITEMS</aside> */}
      </main>
      <Footer />
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
        gatsbyImageData
      }
      mobileImage {
        description
        gatsbyImageData
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
          gatsbyImageData
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
          gatsbyImageData
        }
      }
    }
  }
`

export default peoplePageTemplate
