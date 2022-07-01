import styled, {css, keyframes} from 'styled-components';

const FxJumpDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  80% {
    transform: translateY(25%);
    opacity: 1;
  }
  95% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0%);
  }
`
const Flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Header = styled.header`
  position: fixed;
  z-index: ${({theme}) => theme.layout.layers.overlay};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  width: 100%;
  height: ${props => props.theme.layout.site.header.height};
  box-shadow: 0 1px 1px rgba(0,0,0,0.05),
      0 2px 2px rgba(0,0,0,0.05),
      0 4px 4px rgba(0,0,0,0.05),
      0 8px 8px rgba(0,0,0,0.05),
      0 16px 24px rgba(0,0,0,0.05);
  &.jump-down {
    animation: ${FxJumpDown} 0.25s ease-in-out forwards;
    background: ${({theme}) => theme.styles.background.siteHeader};
    background: ${({theme}) => theme.colors.pastelGreen};
    box-shadow: 0 1px 1px rgba(0,0,0,0.05),
      0 2px 2px rgba(0,0,0,0.05),
      0 4px 4px rgba(0,0,0,0.05),
      0 8px 8px rgba(0,0,0,0.05),
      0 16px 24px rgba(0,0,0,0.05);
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0 ${({theme}) => theme.layout.site.default.sidePadding};
`
export const Left = styled.div`
  a {
    ${Flex}
    gap: 2rem;
    &:hover {
      text-decoration: none;
    }
  }
  .logo {
    width: 32px;
  }
  background-color: ${({theme}) => theme.colors.veryLightGray};
  @media ${({theme}) => theme.devices.iphonesUp} {
    .logo {
      width: 48px;
    }
  }

  @media ${({theme}) => theme.devices.ipadsUp} {
    .logo {
      width: 64px;
    }
  }
`

export const Right = styled.div`
  ${Content} {
    justify-content: flex-end;
  }
  background-color: ${({theme}) => theme.colors.veryLightGray};
`
export const Title = styled.span`
  /* color: ${({theme}) => theme.styles.text.color}; */
  color: ${({theme}) => theme.colors.lightCharcoal};
  font-size: clamp(0.9rem, 3vw, 1.75rem);
  font-weight: 300;
`