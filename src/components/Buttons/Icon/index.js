import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Button } from './styles';

const ButtonIcon = (props) => {
  return(
    <Button onClick={props.onClick} className={props.type || 'default'}>
      <FontAwesomeIcon icon={props.icon} />
    </Button>
  )
}

export default ButtonIcon;