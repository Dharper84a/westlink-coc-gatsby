import React from 'react';
import "./src/common/styles/global.scss";

import {SiteProvider} from './src/context/SiteContext';

export const wrapRootElement = ({element}) => (
  <SiteProvider>{element}</SiteProvider>
)
