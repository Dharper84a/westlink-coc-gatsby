import * as React from 'react';
import styled from 'styled-components'

const _PaddedContent = styled.div`
  position: relative;
  ${props => props.theme.layout.paddedContent.css};
`

export const PaddedContent = (props) => {

  return <_PaddedContent>{props.children}</_PaddedContent>
}