import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import ContentfulRichText from "../../components/ContentTypes/RichText"

import Website from "../Website"
import Header from "../Header"
import Footer from "../Footer"

import { DefaultPageImage } from "../../components/DefaultPageImage/DefaultPageImage"

import * as styles from "./styles.module.scss"

const defaultPageTemplate = ({ data: { contentfulPageDefault: data } }) => {
  console.log(data)

  const desktopImage = getImage(data.featuredImageDesktop)
  const mobileImage = getImage(data.featuredImageMobile)

  return (
    <Website>
      <Header />
        <Helmet>
          <title>{data?.metaPageTitle}</title>
          <meta name="description" content={data?.metaPageDescription} />
        </Helmet>

        <main className={styles.pageContent}>
        {data &&
          <>
            <header>
              <DefaultPageImage
                desktopImage={desktopImage}
                mobileImage={mobileImage}
                alt={data.featuredImageDesktop?.description}
                backgroundColor="#f2f2f2"
              />
            </header>

            <section>
              <h1>{data.title}</h1>
              <div>
                <ContentfulRichText richText={data.pageContent} />
              </div>
            </section>

            {/* <aside>LINKED ITEMS</aside> */}
          </>
        }

        {!data && 
          <p>Unable to load page</p>
        }
        
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
