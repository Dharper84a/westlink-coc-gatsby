import * as React from 'react';
import styled from 'styled-components';

// Components
import Meta from '../Meta';
import SiteHeader from './Header';
import SiteFooter from './Footer';


const Site = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`



const Main = (props) => {

  return(
    <>
      <Meta {...props.meta} />
      <Site>
        <SiteHeader />
          <main>{props.children}</main>
        <SiteFooter />
      </Site>
    </>
  )
}

export default Main;