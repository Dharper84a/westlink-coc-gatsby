import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"


const Website = props => {
  const data = useStaticQuery(graphql`
    {
      contentfulSiteMeta {
        siteAuthor
        siteTitle
        siteDescription
      }
    }
  `).contentfulSiteMeta

  const title = props.title
    ? props.title + " | " + data.siteTitle
    : data.siteTitle

  const description = props.description
    ? props.description
    : data.siteDescription

  return (
      <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
        title={title}
        meta={[
          {
            name: "description",
            content: description,
          },
          {
            name: "author",
            content: data.siteAuthor,
          },
          {
            name: "og:title",
            content: title,
          },
          {
            name: "og:description",
            content: description,
          },
          {
            name: "og:type",
            content: "website",
          },
          {
            name: "twitter:card",
            content: "summary",
          },
          {
            name: "twitter:creator",
            content: data.siteAuthor,
          },
          {
            name: "twitter:title",
            content: title,
          },
          {
            name: "twitter:description",
            content: description,
          },
        ]}
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&family=Roboto+Serif:wght@400;600&display=swap" />
        <link media="print" onload="this.onload=null;this.removeAttribute('media');" href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&family=Roboto+Serif:wght@400;600&display=swap" rel="stylesheet" />
      </Helmet>
      {props.children}
      </>
  )
}

export default Website
