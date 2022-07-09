import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as faIcon from '@fortawesome/free-solid-svg-icons';


import * as Styled from './styles';

const DarkButton = (props) => {

    if(!props.name) return <></>;

    return (
        <Styled.DarkButton onClick={props.onClick}>
            {props.name}<FontAwesomeIcon icon={faIcon[props.icon]} />
        </Styled.DarkButton>

    );
}

export default DarkButton;