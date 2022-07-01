import React from 'react';

// Components
import HeaderSite from '../components/Headers/Site';
import FooterSite from '../components/Footers/Site';

import { Layout, PageContent, PagePaddedContent } from './styles';
import { useEffect } from 'react';
import { useState } from 'react';

const DefaultStructure = (props) => {
  const [isStickyHeader, setIsStickyHeader] = useState(false);
  const stickyHeaderThreshold = 150;
  const scrollHandler = () => {
    if(window.scrollY >= stickyHeaderThreshold) {
      setIsStickyHeader(true);
    } else {
      setIsStickyHeader(false);
    }
  }
  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, []);
  return(
    <Layout>
      <HeaderSite isSticky={isStickyHeader}/>
      <PageContent isSticky={isStickyHeader ? '0' : '-80px'}>
        {props.children}
      </PageContent>
      <FooterSite />
    </Layout>
  )
}

export default DefaultStructure;

export const PaddedContent = (props) => {
  return(
    <PagePaddedContent>
      {props.children}
    </PagePaddedContent>
  )
}