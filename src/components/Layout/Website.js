import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import SiteContext from "../../context/SiteContext";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
/*
OG K/V
<meta property="og:title" content={props.meta.title} />
<meta property="og:description" content={props.meta?.description} />
<meta property="og:type" content={props.meta?.og?.type} />
<meta property="og:url" content={pageUrl} />
<meta property="og:locale" content="en_US" />

<meta property="og:image" content={props.meta?.og?.image?.source} />
<meta property="og:image:type" content={props.meta?.og?.image?.mime} />
<meta property="og:image:width" content={props.meta?.og?.image?.width} />
<meta property="og:image:height" content={props.meta?.og?.image?.height} />
<meta property="og:image:alt" content={props.meta?.og?.image?.alt} />
*/

const Website = (props) => {
  const [pageUrl, setPageUrl] = useState('Loading...');


  useEffect(() => {
    setPageUrl(window.location.href);
  }, [])
  return (
    <SiteContext.Consumer>
      {site =>(
        <Fragment>
          <Helmet>
          <meta charSet="utf-8" />
          <title>{props.meta.title}</title>
          <meta name="description" content={props.meta?.description} />
          
          <meta property="og:url" content={pageUrl} />
          <meta property="og:locale" content="en_US" />

          {props.meta.og && 
            props.meta.og.map((data, key) => {
              return <meta property={data.key} content={data.value} key={key} />
            })
          }
          </Helmet>
          {props.header && 
            <Header />
          }
          {props.children}
          {props.footer &&
            <Footer />
          }
        </Fragment>
      )}
      
      
    </SiteContext.Consumer>
  )

}

export default Website