import React, {useState} from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// Styles
import * as styles from "./Header.module.scss"
import MobileNavigation from "./MobileNavigation/MobileNavigation"
import DesktopNavigation from "./DesktopNavigation/DesktopNavigation"


const Header = (props) => {

  return (
    <div className={styles.wrapper}>
      <header className={styles.siteHeader}>
        <div className={styles.title}>
          <StaticImage
            src="../../../images/logo-white-bg.png"
            alt="Westlink Church of Christ logo"
            loading="eager"
            placeholder="tracedSVG"
          />
          <span><Link to="/" title="Westlink Church of Christ home page">Westlink Church of Christ</Link></span>
        </div>

        <nav className={styles.navigation}>
          <MobileNavigation />
          <DesktopNavigation />
        </nav>
      </header>
    </div>
  )
}

export default Header
