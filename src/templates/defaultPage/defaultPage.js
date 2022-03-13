import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentfulRichText from '../../components/ContentTypes/RichText'

import Website from "../Website"
import Header from "../Header"
import Footer from "../Footer"

import * as styles from "./styles.module.scss"

const defaultPageTemplate = ({ data: { contentfulPageDefault: data } }) => {
  console.log(data)

  const desktopImage = getImage(data.featuredImageDesktop)

  return (
    <Website>
      <Header />
      <main className={styles.pageContent}>
        <header>
          <GatsbyImage
            image={desktopImage}
            alt={data.featuredImageDesktop.description}
            backgroundColor= '#f2f2f2'
          />
        </header>

        <section>
          <h1>{data.title}</h1>
          <div>
            <ContentfulRichText richText={data.pageContent} />
          </div>
          
        </section>

        <aside>LINKED ITEMS</aside>
      </main>
      <Footer />
    </Website>
  )
}

export const query = graphql`
  query pageDefault($slug: String) {
    contentfulPageDefault(slug: { eq: $slug }) {
      slug
      title
      contentful_id
      featuredImageDesktop {
        description
        gatsbyImageData
      }
      featuredImageMobile {
        description
        gatsbyImageData
      }
      metaPageDescription
      metaPageTitle
      pageContent {
        raw
      }
    }
  }
`

export default defaultPageTemplate
