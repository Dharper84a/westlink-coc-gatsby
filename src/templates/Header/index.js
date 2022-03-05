import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Styles
import * as styles from './styles.module.scss'

const Header = (props) => {

  return (
    <div className={styles.wrapper}>
      <header className={styles.siteHeader}>
        <div className={styles.title}>
          <StaticImage src="../../images/logo-white-bg.png" alt="Westlink Church of Christ logo" />
          <span>Westlink Church of Christ</span>
        </div>
        
        <nav className={styles.navigation}>
          <ul>
            <li>
              About
              <ul>
                <li>
                  <a href="/about/our-beliefs">Our Beliefs</a>
                </li>
                <li>
                  <a href="/about/ministers-and-staff">Ministers and Staff</a>
                </li>
                <li>
                  <a href="/about/missions">Missions</a>
                </li>
                
              </ul>
            </li>
            <li>
              Connect
              <ul>
                <li>
                  <a href="/connect/visit-westlink">Visit Westlink</a>
                </li>
                <li>
                  <a href="/connect/becoming-a-member">Becoming a Member</a>
                </li>
                <li>
                  <a href="/connect/groups-and-ministries">Groups and Ministries</a>
                </li>

              </ul>
            </li>
            <li>
              Media
              <ul>
                <li>
                  <a href="/media/watch-live">Watch Live</a>
                </li>
                <li>
                  <a href="/media/podcasts">Podcasts</a>
                </li>
                <li>
                  <a href="/media/past-sermons">Past Sermons</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header