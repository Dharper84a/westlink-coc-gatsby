import * as React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

import * as Styled from "./styles"

import Menu from "../../Menu/Footer"

const Footer = props => {
  return (
    <Styled.Footer>
      <Styled.Navigation>
        <Menu />
      </Styled.Navigation>
      <Styled.Legal>
        <span>
        &copy; Copyright {new Date().getFullYear()} Westlink Church of Christ.
        </span>
        <span>
            Create with <FontAwesomeIcon icon={faHeart} /> by Donald Harper
        </span>
      </Styled.Legal>
    </Styled.Footer>
  )
}

export default Footer
