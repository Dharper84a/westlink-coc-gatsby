import React, {useState, useContext} from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import SiteContext from "../../../context/SiteContext"

// Styles
import * as styles from "./Header.module.scss"


const Header = (props) => {
  const siteStore = useContext(SiteContext);
  const [isOpen, setIsOpen] = useState(false)
  
  const mobileIcon = "../../../images/icons/chevron-left.svg"

  const onMobileButtonClickHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={styles.wrapper}>
      <header className={styles.siteHeader}>
        <div className={styles.title}>
          <StaticImage
            src="../../../images/logo-white-bg.png"
            alt="Westlink Church of Christ logo"
          />
          <span><Link to="/" title="Westlink Church of Christ home page">Westlink Church of Christ</Link></span>
        </div>

        <nav className={styles.navigation}>
          <div className={styles.mobileNavigation}>
            <button onClick={onMobileButtonClickHandler}>
              <StaticImage
                src={mobileIcon}
                alt="Mobile navigation icon"
                width={32}
              />
            </button>
            { isOpen &&
            <div className={styles.mobileDrawer}>
              <div className={styles.mobileDrawerGrid}>
                <div>
                  <header>
                    <span>About</span>
                  </header>
                  <nav>
                    <ul>
                      <li>
                        <a href="/our-beliefs">Our Beliefs</a>
                      </li>
                      <li>
                        <a href="/ministers-and-staff">Ministers and Staff</a>
                      </li>
                      <li>
                        <a href="/missions">Missions</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div>
                  <header>
                    <span>Connect</span>
                  </header>
                  <nav>
                    <ul>
                      {/* <li>
                        <a href="/visit-westlink">Visit Westlink</a>
                      </li> */}
                      <li>
                        <a href="/becoming-a-member">Becoming a Member</a>
                      </li>
                      <li>
                        <a href="/groups-and-ministries">
                          Groups and Ministries
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div>
                  <header>
                    <span>Media</span>
                  </header>
                  <nav>
                    <ul>
                      <li>
                        <a href="/live">Watch Live</a>
                      </li>
                      <li>
                        <a href="/podcasts">Podcasts</a>
                      </li>
                      <li>
                        <a href="/sermons">Past Sermons</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div>
                  Social or META
                </div>
              </div>
            </div>
            }
          </div>
          <ul className={styles.desktopNavigation}>
            <li>
              About
              <ul>
                <li>
                  <a href="/our-beliefs">Our Beliefs</a>
                </li>
                <li>
                  <a href="/ministers-and-staff">Ministers and Staff</a>
                </li>
                <li>
                  <a href="/missions">Missions</a>
                </li>
              </ul>
            </li>
            <li>
              Connect
              <ul>
                {/* <li>
                  <a href="/visit-westlink">Visit Westlink</a>
                </li> */}
                <li>
                  <a href="/becoming-a-member">Becoming a Member</a>
                </li>
                <li>
                  <a href="/groups-and-ministries">
                    Groups and Ministries
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Media
              <ul>
                <li>
                  <a href="/live">Watch Live</a>
                </li>
                <li>
                  <a href="/podcasts">Podcasts</a>
                </li>
                <li>
                  <a href="/sermons">Past Sermons</a>
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
