import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

// Components
import MenuSiteHeader from '../../Menus/SiteHeader';

// Styles
import { Header, Left, Right, Title, Content } from "./styles"

const SiteHeader = () => {

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

export default SiteHeader;