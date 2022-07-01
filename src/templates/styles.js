import styled, {css, keyframes} from 'styled-components'

const FxLinkHover = keyframes`
  0% {
    width: 30%;
  }
  100% {
    width: 55%;
  }
`

const FxLinkHoverOut = keyframes`
  0% {
    width: 55%;
  }
  100% {
    width: 30%;
  }
`

export const Layout = styled.div`
  position: relative;
  overflow-x: hidden;
  max-width: 120rem;
  min-height: 100vh;
  margin: 0 auto;
`
export const PageContent = styled.main`
  margin-top: ${props => props.theme.layout.site.header.height};
  padding-bottom: 4rem;
  background: ${({theme}) => theme.colors.veryLightGray};
  background-position: bottom;
  color: ${({theme}) => theme.colors.charcoal};
  p {
    ${({theme}) => theme.layout.site.p};
  }
  a {
    position: relative;
    color: ${({theme}) => theme.colors.charcoal};
    &:after {
      position: absolute;
      content: '';
      display: block;
      width: 55%;
      height: 1px;
      margin-top: 0.125rem;
      background: ${({theme}) => theme.colors.charcoal};
    }
    &:hover {
      text-decoration: none;
      &:after {
        animation: ${FxLinkHover} 0.35s ease-in-out forwards;
      }
    }
    &:not(:hover) {
      &:after {
        animation: ${FxLinkHoverOut} 0.35s ease-in-out forwards;
      }
    }
    &:visited {
      color: ${({theme}) => theme.colors.mediumBlueGray};
    }
   
  }
`;

export const PagePaddedContent = styled.div`
  padding: ${({theme}) => theme.layout.site.main.padding.all};
`