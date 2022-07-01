import styled, {css, keyframes} from 'styled-components';

const Flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const FxButtonHover = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`

const FxButtonHoverOut = keyframes`
  0% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`

const FxButtonSvgHover = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`
const FxButtonSvgHoverOut = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0);
  }
`
export const Menu = styled.nav`
  button.header-menu-button {
    font-size: 1.15rem;
    border-radius: 0.5rem;
    /* border: none; */
    svg {
      font-size: 1.25rem;
    }
    &:hover {
      box-shadow: none;
    }
  }
`

export const Inner = styled.div`
  padding: 0 2rem 3rem 2rem;
`

export const TopMenuList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`

export const TopItem = styled.li`
  position: relative;
  a {
    color: ${({theme}) => theme.colors.darkBlack};
    font-size: 1.5rem;
    font-weight: 300;
    &:hover {
      text-decoration: none;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 55%;
    height: 2px;
    padding-top: 0.125rem;
    background: ${({theme}) => theme.colors.pastelGreen};
  }
  &:hover {
    &:after {
      animation: ${({theme}) => theme.fx.linkHover} 0.35s ease-in-out forwards;
    }
  }
  &:not(:hover) {
    &:after {
      animation: ${({theme}) => theme.fx.linkHoverOut} 0.35s ease-in-out forwards;
    }
  }
`

export const MenuList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  button {
    font-size: 0.75rem;
  }
`

export const Column = styled.div``

export const Heading = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
`

export const List = styled.ul`
  margin-top: 0.125rem;
`

export const Item = styled.li`
  padding: 0.25rem 0;
  &.inset {
    padding-left: 0.75rem;
  }
  a {
    position: relative;
    color: ${({theme}) => theme.colors.darkBlack};
    transition: color 0.35s ease-in-out;
    &:after {
      position: absolute;
      content: '';
      display: block;
      width: 55%;
      height: 2px;
      background: ${({theme}) => theme.colors.pastelGreen};
    }
    &:hover {
      text-decoration: none;
      color: ${({theme}) => theme.colors.blueGray};
      &:after {
        animation: ${({theme}) => theme.fx.linkHover} 0.35s ease-in-out forwards;
      }
    }
    &:not(:hover) {
      &:after {
        animation: ${({theme}) => theme.fx.linkHoverOut} 0.35s ease-in-out forwards;
      }
    }
  }
`

export const MediaList = styled.section`
  margin-top: 2rem;
`
export const MediaGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 0.5rem;
`
const FxLoading = keyframes`
  0%, 100% {
    font-size: 1.25rem;
  }
  50% {
    font-size: 1.35rem;
  }
`
export const MediaItem = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
  background: ${({theme}) => theme.colors.blueGray};
  &.more {
    /* position: absolute; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: -1px 0 1px rgba(0,0,0,0.05),
      -2px 0 2px rgba(0,0,0,0.05),
      -4px 0 4px rgba(0,0,0,0.05),
      -8px 0 8px rgba(0,0,0,0.05),
      -16px 0 24px rgba(0,0,0,0.05);
  }
  &.loading {
    position: relative;
    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      content: 'Loading...';
      color: ${({theme}) => theme.colors.white};
      font-size: 1.25rem;
      font-weight: 600;
      animation: ${({theme}) => theme.fx.FxLoading} 2s ease-in-out infinite;
    }
  }
  
`

export const MediaItemMore = styled.div`
  position: relative;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
  background: ${({theme}) => theme.colors.blueGray};
  transition: box-shadow 0.35s ease-in-out, background-color 0.35s ease-in-out;
  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${({theme}) => theme.colors.white};
    font-size: 1.25rem;
    font-weight: 600;
    transition: color 0.35s ease-in-out;
    svg {
      padding-left: 0.5rem;
      font-size: 1.5rem;
      transition: transform 0.35s ease-in-out;
    }
  }

  &:hover {
    background: ${({theme}) => theme.colors.transparentBlueGray};
    box-shadow: -1px 0 1px rgba(0,0,0,0.05),
    -2px 0 2px rgba(0,0,0,0.05),
    -4px 0 4px rgba(0,0,0,0.05),
    -8px 0 8px rgba(0,0,0,0.05),
    -16px 0 24px rgba(0,0,0,0.05);
    a {
      text-decoration: none;
      color: ${({theme}) => theme.colors.mediumBlue};
      svg {
        transform: translateX(0.25rem);
      }
    }
  }
`

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${({theme}) => theme.layout.layers.drawer};
  overflow-y: scroll;
  display: none;
  width: 48rem;
  max-width: 80%;
  height: 100vh;
  background: ${props => props.theme.colors.veryLightGray};
  box-shadow: -1px 0 1px rgba(0,0,0,0.05),
      -2px 0 2px rgba(0,0,0,0.05),
      -4px 0 4px rgba(0,0,0,0.05),
      -8px 0 8px rgba(0,0,0,0.05),
      -16px 0 24px rgba(0,0,0,0.05);

  &::-webkit-scrollbar-track
  {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: ${({theme}) => theme.colors.veryLightGray};
  }

  &::-webkit-scrollbar
  {
    width: 1rem;
    background-color: ${({theme}) => theme.colors.veryLightGray};
  }

  &::-webkit-scrollbar-thumb
  {
    background-color: ${({theme}) => theme.colors.charcoal};
  }
  &.closed {
    display: none;
    opacity: 0;
  }
  &.opened {
    display: block;
  }
  &.opening {
    display: block;
    animation: ${({theme}) => theme.fx.slideInRight} 0.35s cubic-bezier(.43,.98,.86,.88);
  }
  &.closing {
    display: block;
    animation: ${({theme}) => theme.fx.slideOutRight} 0.35s cubic-bezier(.43,.98,.86,.88);
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({theme}) => theme.layout.layers.overlay};
  display: none;
  width: 100vw;
  height: 100vh;
  background: ${({theme}) => theme.colors.transparentBlack};
  &.closed {
    display: none;
  }
  &.opened {
    display: block;
  }
  &.opening {
    display: block;
    animation: ${({theme}) => theme.fx.fadeIn} 0.35s ease-in-out;
  }
  &.closing {
    display: block;
    animation: ${({theme}) => theme.fx.fadeOut} 0.35s ease-in-out;
  }
`

export const DrawerHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: ${({theme}) => theme.layout.site.header.padding.all};
`

export const Divider = styled.hr`
  width: 100%;
  height: 0.5rem;
  margin: 2rem 0;
  border: none;
  background: ${({theme}) => theme.colors.pastelGreen};
`