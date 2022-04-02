import React from "react"
import { graphql } from "gatsby"


import Website from "../templates/Website"
import Header from "../templates/Header"
import Footer from "../templates/Footer"

import ContactPageTemplate from "../templates/contactPage/contactPage"
import { Helmet } from "react-helmet"

const ContactPage = ({ data: {contentfulPageContact: data} }) => {
  console.log(data)

  return (
    <Website>
      <Helmet>
        <title>Contact - Westlink Church of Christ</title>
      </Helmet>
      <Header />
        <ContactPageTemplate data={data} />
      <Footer />
    </Website>
  )
}

export const query = graphql`
  {
    contentfulPageContact {
      title
      contentful_id
      headerImageDesktop {
        gatsbyImageData
      }
      headerImageMobile {
        description
        gatsbyImageData
      }
      phone
      email
      address {
        lat
        lon
      }
    }
  }
`

export default ContactPage
