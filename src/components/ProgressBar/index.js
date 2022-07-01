import * as React from 'react';

// Styles
import { _ProgressBar, ProgressValue } from './styles';

const ProgressBar = (props) => {
  return (
    <_ProgressBar>
      <ProgressValue className={props.type} />
    </_ProgressBar>
  )
}

export default ProgressBar;