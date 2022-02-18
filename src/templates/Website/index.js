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
    <React.Fragment>
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
      ></Helmet>
      {props.children}
    </React.Fragment>
  )
}

export default Website
