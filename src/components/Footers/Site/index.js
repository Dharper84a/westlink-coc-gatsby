import React from 'react';
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

// Components
import ButtonIcon from '../../Buttons/Icon';
import ButtonStandard from '../../Buttons/Standard';
import MenuSiteFooter from '../../Menus/SiteFooter';

import { Footer, Right, Left, Legal } from './styles';
const FooterSite = () => {

  const onShowCreditsHandler = () => {
    console.log('Show Credits');
  }
  return (
    <Footer>
      <Left>
        <MenuSiteFooter />
      </Left>
      <Right>
        <Legal>
          &copy;{new Date().getFullYear()} Westlink Church of Christ
        </Legal>
        
        <ButtonStandard label="&bull;&bull;&bull;" onClick={onShowCreditsHandler} type="slim special" />
        {/* <ButtonIcon icon={faEllipsis} onClick={onShowCreditsHandler} type="slim" /> */}
      </Right>
    </Footer>
  );
}

export default FooterSite;