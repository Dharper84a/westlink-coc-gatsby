import React from "react"
import { Link, graphql } from "gatsby"


// Template
import {PageContent, PageSidebar, SidebarPageContainer} from '../templates/Templates';

// Components
import Website from "../components/Layout/Website"
import ContactForm from "../components/Forms/ContactForm/ContactForm"
import MapInstance from "../components/Map/Map"


const ContactPage = props => {
  console.log(props)
  const data = props.data.contentfulPageContact

  return (
    <Website meta={data.metaData} title={data.title} header={true} footer={true}>
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
              <Link to="https://www.google.com/maps/dir//Westlink+Church+of+Christ,+10025+W+Central+Ave,+Wichita,+KS+67212/@37.7123913,-97.4815495" title="Get directions to Westlink Churhc of Christ" target="_blank" rel="noopener noreferrer">Get Directions</Link>
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
      metaData {
        ...ComponentMeta
      }
    }
  }
`
export default ContactPage