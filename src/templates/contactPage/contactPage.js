import React from "react"
import { Map, InforWindow, Marker, GoogleApiWrapper } from "google-maps-react"

import * as styles from "./styles.module.scss"


const ContactPageTemplate = (props) => {
  const position = { lat: props.data.address.lat, lng: props.data.address.lon };
 
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: '600px',
    minWidth: '300px',
    maxWidth: '500px'
  };

  return (
    <main className={styles.pageContent}>
   
      <section itemscope itemtype="https://schema.org/Organization">
        <h2 itemprop="name">Westlink Church of Christ</h2>
        <ul>
          <li>
            <a itemprop="telephone" href="tel:13167221111" title="Call Westlink Church of Christ">
              (316) 722-1111
            </a>
           
          </li>
          <li>
            <address
              itemprop="address"
              itemscope
              itemtype="https://schema.org/PostalAddress"
            >
              <span itemprop="streetAddress">10025 W. Central Ave.</span>
              <br />
              <span itemprop="addressLocality">Wichita</span>,{" "}
              <span itemprop="addressRegion">Kansas</span>{" "}
              <span itemprop="postalCode">67212</span>
              <br />
            </address>
          </li>
        </ul>
      </section>

      <aside>
        <Map 
          google={props.google} 
          zoom={14} 
          initialCenter={position}
          // style={style}
          scrollwheel={false}
          draggable={false}
          keyboardShortcuts={false}
          disableDoubleClickZoome={true}
          containerStyle={containerStyle}
        >
          <Marker
            title="Westlink Church of Christ"
            position={position} />

        </Map>
      </aside>
    </main>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCMTSxkxHnoFHFJsC3l2fi8xcBC5aGbok8'
})(ContactPageTemplate)
// export default ContactPageTemplate
