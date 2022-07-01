import React from 'react';

import Website from './src/Website';
// import { ThemeProvider } from 'styled-components';
import "./src/common/styles/global.css";

// import {theme} from './src/common/styles/theme';
import {SiteProvider} from './src/context/SiteContext';

export const wrapRootElement = ({element}) => (
    <SiteProvider>
      <Website>
        {element}
      </Website>
    </SiteProvider>
)
