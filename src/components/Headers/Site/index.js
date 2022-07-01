import React, { useContext } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {faBars} from "@fortawesome/free-solid-svg-icons"

import ButtonStandard from "../../Buttons/Standard"
import ButtonIcon from "../../Buttons/Icon"

import MenuSiteHeader from "../../Menus/SiteHeader"
import SiteContext from "../../../context/SiteContext"

import { Header, Left, Right, Title, Content } from "./styles"
import { useEffect } from "react"
const HeaderSite = props => {
  const siteStore = useContext(SiteContext)

  return (
    <Header>
      <Left>
        <Content>
          <Link to="/" title="Westlink Church of Christ Website">
            <StaticImage
              src="../../../images/Icon-Logo-256x256.png"
              alt="Westlink Church of Christ logo"
              loading="eager"
              placeholder="tracedSVG"
              width={64}
              height={64}
              className="logo"
            />
            <Title>Westlink Church of Christ</Title>
          </Link>
        </Content>
       
      </Left>
      <Right>
        <Content>
          <MenuSiteHeader />
        </Content>
        
      </Right>
    </Header>
  )
}

export default HeaderSite
