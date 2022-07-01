import styled, {css} from 'styled-components'

const getButtonStyles = (type, variant) => {

}
export const ButtonComponent = styled.button`
  ${({theme}) => theme.styles.button.reset};
  /* ${({theme}) => theme.styles.button.defaults}; */
  ${props => props.theme.styles.button.defaults}
  ${props => props.theme.styles.button[props.type][props.variant].normal}
  &:hover {
    ${props => props.theme.styles.button[props.type][props.variant].hover}
  }
`