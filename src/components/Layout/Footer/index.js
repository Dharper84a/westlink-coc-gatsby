import * as React from 'react';

// Components
import ButtonStandard from '../../Buttons/Standard';
import MenuSiteFooter from '../../Menus/SiteFooter';

// Styles
import { Footer, Right, Left, Legal } from './styles';

const SiteFooter = (props) => {

  const onShowCreditsHandler = () => {
    console.log('Show Credits');
    fetch("http://localhost:8000/__refresh", {
      method: 'POST'
    }).then((res) => {
      console.log('GraphQL Refreshed');
    });
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
  )
}

export default SiteFooter;