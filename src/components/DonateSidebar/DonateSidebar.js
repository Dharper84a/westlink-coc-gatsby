import React from 'react';
import {Link} from 'gatsby'
import * as styles from './DonateSidebar.module.scss';

const DonateSidebar = props => {

  return (
    <section className={styles.container}>
      <ul>
        <li>
          <p>
            <Link to="https://my.simplegive.com/App/Giving/westlink" title="Donate online to Westlink Church of Christ" target="_blank" rel="noopener noreferrer">Donate Online</Link><br />
            Donating online is easy, fast and secure.
          </p>
        </li>
        <li>
          <p>
            Donate by check: <br /><strong>Westlink Church of Christ</strong>
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
          </p>
        </li>
        <li>
          <p>
            You can always come visit and donate in person!
          </p>
        </li>
      </ul>
      
    </section>
  )
}

export default DonateSidebar