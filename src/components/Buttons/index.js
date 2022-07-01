import React from 'react';

import { ButtonComponent } from './styles';

const Button = (props) => {

  if(!props.type || !props.variant) return <span>Missing required button props</span>

  const buttonClass = `${props.type} ${props.variant} ${props.className || ''}`;

  return(
    <ButtonComponent type={props.type} variant={props.variant} className={buttonClass}>
      {props.label}
    </ButtonComponent>
  )
}

export default Button;