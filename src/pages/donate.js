import React from "react"
import { Link } from "gatsby"

// Templates
import {
  PageContent,
  PageSidebar,
  SidebarPageContainer,
} from "../templates/Templates"

// Components
import Website from "../components/Layout/Website"
import DonateSidebar from "../components/DonateSidebar/DonateSidebar"

const Donate = props => {

  return (
    <Website meta={[]} title="Donate" header={true} footer={true}>
      <main>
        <SidebarPageContainer>
          <PageContent>
            <h1>Donate</h1>
            <p>
              <strong>
                Thank you for you interest in donating to Westlink Church of
                Christ!
              </strong>
            </p>
            <p>
              There are many ways to donate. Giving monetarily, although very
              much appriaciated, is not the only way to donate. Your time,
              offering your expertise amoung many other things are all valuable.
              Your presences in some cases can be more valuable then the money
              you could donate.
            </p>

            <p>
              Please reach out to a{" "}
              <Link to="/groups-and-ministries" title="Goto group and ministries page">
                group
              </Link>{" "}
              or{" "}
              <Link to="/contact" title="Contact Westlink Church of Christ">
                contact us
              </Link>{" "}
              if you would like to offer your time or services.
            </p>
          </PageContent>
          <PageSidebar>
            <DonateSidebar />
            

          </PageSidebar>
        </SidebarPageContainer>
      </main>
    </Website>
  )
}

export default Donate
