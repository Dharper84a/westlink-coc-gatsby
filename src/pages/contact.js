import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

// Template
import {PageContainer, PageContent, PageSidebar, SidebarPageContainer} from '../templates/Templates';

// Components
import Website from "../components/Layout/Website"

import ContactForm from "../components/Forms/ContactForm/ContactForm"
import MapInstance from "../components/Map/Map"
// import Website from "../templates/Website"
// import Header from "../templates/Header"
// import Footer from "../templates/Footer"

// import ContactPageTemplate from "../templates/contactPage/contactPage"

const ContactPage = props => {
  console.log(props)
  const data = props.data.contentfulPageContact
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

  return (
    <Website meta={meta} header={true} footer={true}>
      <Helmet>
        <title>Contact - Westlink Church of Christ</title>
      </Helmet>
      <main itemScope itemType="https://schema.org/Organization">
        <h1 itemProp="name">Contact Westlink</h1>
        <SidebarPageContainer>
          
          <PageContent>
          
            <a
              itemProp="telephone"
              href="tel:13167221111"
              title="Call Westlink Church of Christ"
            >
              (316) 722-1111
            </a>

            <address
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">10025 W. Central Ave.</span>
              <br />
              <span itemProp="addressLocality">Wichita</span>,{" "}
              <span itemProp="addressRegion">Kansas</span>{" "}
              <span itemProp="postalCode">67212</span>
              <br />
            </address>

            <ContactForm />
          </PageContent>
          <PageSidebar>
            <MapInstance 
              position={{ lat: data.address.lat, lng: data.address.lon }}
              marker={{
                position: { lat: data.address.lat, lng: data.address.lon },
                title: "Westlink Church of Christ"
              }}
              mapContainerStyle={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: "400px",
                minWidth: "300px",
                maxWidth: "800px",
              }}
              className="contact"
            />
          </PageSidebar>
        </SidebarPageContainer>
        

        
        
      </main>
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