import React from "react"

import Header from "../Header/"
import Footer from "../Footer/"

const TemplateHomepage = props => {
  const displayType = props.displayType ? props.displayType : 'white';
  return (
    <React.Fragment>
      <Header displayType={displayType} />
      <main className="template-homepage">{props.children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default TemplateHomepage
