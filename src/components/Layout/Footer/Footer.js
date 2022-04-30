import React from "react"
import { Link } from "gatsby"

import * as styles from "./Footer.module.scss"

const Footer = () => {

  return (
    <footer className={styles.container}>
      <Link to="/donate" title="Donate to Westlink Church of Christ">
        Donate
      </Link>
      &nbsp;•&nbsp;
      <Link
        to="/contact"
        title="Message, call or get directions to Westlink Church of Christ"
      >
        Contact
      </Link>
      <div>
        <span>Copyright {new Date().getFullYear()} Westlink Church of Christ. All Rights Reserved</span><br />
        <span>Created by: Donald Harper</span>
      </div>
    </footer>
  )
}

export default Footer
