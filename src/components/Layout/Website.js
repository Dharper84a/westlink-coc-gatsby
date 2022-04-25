import React, { Fragment, useEffect, useState } from "react"
import { Helmet } from "react-helmet"

import SiteContext from "../../context/SiteContext"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const websiteTitle = "Westlink Church of Christ"

const Website = props => {
  const [pageUrl, setPageUrl] = useState("Loading...")
  const [hasPageTitle, setHasPageTitle] = useState(false)

  const defaultTitle =
    props.title === websiteTitle
      ? props.title
      : `${props.title} - ${websiteTitle}`

  const generateMetaTag = (meta, key) => {

    const content = meta.content.content

    var schema = {
      property: "",
      content: content,
    }

    switch (meta.contentType) {
      case "Title":
        setHasPageTitle(true)
        return (
          <title>
            {content === websiteTitle
              ? content
              : `${content} - ${websiteTitle}`}
          </title>
        )
      case "Description":
        return <meta {...{ name: "description", content: content }} />
      case "Social Title":
        schema.property = "og:title"
        break
      case "Social Description":
        schema.property = "og:description"
        break
      case "Social Image":
        schema.property = "og:image"
        break
      case "Social Image Alt":
        schema.property = "og:image:alt"
        break;
      default:
        return <></>
    }

    return <meta {...schema} key={key} />
  }

  useEffect(() => {
    setPageUrl(window.location.href)
  }, [])
  return (
    <SiteContext.Consumer>
      {site => (
        <Fragment>
          <Helmet>
            <meta charSet="utf-8" />

            {props.meta.map((meta, key) => {
              return generateMetaTag(meta, key)
            })}

            {!hasPageTitle &&
            <title>{defaultTitle}</title>
            }
            <meta property="og:url" content={pageUrl} />
            <meta property="og:locale" content="en_US" />
          </Helmet>
          {props.header && <Header />}
          {props.children}
          {props.footer && <Footer />}
        </Fragment>
      )}
    </SiteContext.Consumer>
  )
}

export default Website
