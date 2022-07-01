import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Button } from './styles';

const ButtonStandard = (props) => {
  let label = props.label;

  const buttonClass = `${props.type ? props.type : 'default'} ${props.color ? props.color : 'dark'} ${props.className}`;
  return(
    <Button onClick={props.onClick} className={buttonClass}>
      <span>{label}</span>
      <FontAwesomeIcon icon={props.icon} />
    </Button>
  )
}

export default ButtonStandard;