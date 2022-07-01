import React, {useEffect, useState, useContext} from 'react';

import { ThemeProvider } from 'styled-components';
import {theme} from './common/styles/theme';
import {darkStyles} from './common/styles/dark-theme';

import SiteContext from './context/SiteContext';

const Website = (props) => {
  const siteStore = useContext(SiteContext);
  const [theTheme, setTheTheme] = useState(theme);

  useEffect(() => {
    if(siteStore.theme === 'dark') {
      let mergedStyles = {...theme.styles, ...darkStyles};
      setTheTheme((prevState) => ({
        ...prevState,
        styles: mergedStyles,
      }));
    } else {
      setTheTheme(theme);
    }

  }, [siteStore.theme])
  return(
    <SiteContext.Consumer>
      {site => (
        <ThemeProvider theme={theTheme}>
          {props.children}
        </ThemeProvider>
      )}
    </SiteContext.Consumer>
  )
}

export default Website;