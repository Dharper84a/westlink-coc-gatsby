import * as React from "react"

// Components
import Main from "../../components/Layout/Main";
import SectionResovler from "../../components/PageSections/Resolver";
// import ProgressBar from "../../components/ProgressBar";
const PageTemplate = (props) => {
  console.log('Page Props', props);
  const meta = {
    basic: props?.metaBasic,
    image: props?.metaImage
  }
  return(
    <Main meta={meta}>
      <SectionResovler sections={props.page.pageSections} />
    </Main>
    
  )
}

export default PageTemplate;