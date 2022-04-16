import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentfulRichText from "../../../components/ContentTypes/RichText"

// Hooks
import useWindowDimensions from "../../../hooks/useWindowDimensions"

// Templates
import {
  DefaultPageContainer,
  DefaultPageContent,
  DefaultPageMedia,
} from "../../Templates"

// Components
import Website from "../../../components/Layout/Website"

const DefaultPageTemplate = ({ data: { contentfulPageDefault: data } }) => {
  const [image, setImage] = useState(null)
  const { width } = useWindowDimensions()
  
  console.log(data)
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
        ? getImage(data.featuredImageDesktop)
        : getImage(data.featuredImageMobile)
    )
  }, [width, data.featuredImageDesktop, data.featuredImageMobile])

  return (
    <Website meta={meta} header={true} footer={true}>
      <Helmet>
        <title>{data.metaPageTitle}</title>
      </Helmet>
      <main>
        <DefaultPageContainer>
          <DefaultPageMedia>
            {image && (
              <GatsbyImage
                image={image}
                alt={data.featuredImageDesktop?.description}
              />
            )}
          </DefaultPageMedia>
          <DefaultPageContent>
            
            <h1>{data.title}</h1>
            <div>
              <ContentfulRichText richText={data.pageContent} />
            </div>
          </DefaultPageContent>
        </DefaultPageContainer>
      </main>
    </Website>

    // <Website>
    //   <Header />
    //     <Helmet>
    //       <title>{data?.metaPageTitle}</title>
    //       <meta name="description" content={data?.metaPageDescription} />
    //     </Helmet>

    //     <main className={styles.pageContent}>
    //     {data &&
    //       <>
    //         <header>
    //           <DefaultPageImage
    //             desktopImage={desktopImage}
    //             mobileImage={mobileImage}
    //             alt={data.featuredImageDesktop?.description}
    //             backgroundColor="#f2f2f2"
    //           />
    //         </header>

    //         <section>
    //           <h1>{data.title}</h1>
    //           <div>
    //             <ContentfulRichText richText={data.pageContent} />
    //           </div>
    //         </section>

    //         {/* <aside>LINKED ITEMS</aside> */}
    //       </>
    //     }

    //     {!data &&
    //       <p>Unable to load page</p>
    //     }

    //   </main>
    //   <Footer />
    // </Website>
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

export default DefaultPageTemplate
