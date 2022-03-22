import React from "react"
import { getImage } from "gatsby-plugin-image"

import * as styles from "./styles.module.scss"

const ContactPageTemplate = props => {
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
        
      </aside>
    </main>
  )
}

export default ContactPageTemplate
